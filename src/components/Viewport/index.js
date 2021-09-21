import { useMemo } from "react";
import PropTypes from "prop-types";

import Row from "./components/Row";
import useWindowPosition from "../../hooks/useWindowPosition";

import "./styles.css";

function Viewport(props) {
  const { height, data, nodePadding } = props;

  const currentScrollTop = useWindowPosition("#viewport");

  const { rowHeight, totalContentHeight, paddingTop, rows } = useMemo(() => {
    const _rowHeight = 25;

    const totalRows = data.length;

    const _visibleRows = Math.ceil(height / _rowHeight) + nodePadding;

    const _totalContentHeight = totalRows * _rowHeight;

    let _startRow = currentScrollTop / _rowHeight - nodePadding;
    _startRow = Math.max(0, _startRow);
    _startRow = Math.min(_startRow, totalRows - _visibleRows);

    const _paddingTop = _startRow * _rowHeight;

    const _rows = data.slice(_startRow, _startRow + _visibleRows);

    return {
      rowHeight: _rowHeight,
      totalContentHeight: _totalContentHeight,
      paddingTop: _paddingTop,
      rows: _rows,
    };
  }, [height, data, nodePadding, currentScrollTop]);

  return (
    <div id="viewport" style={{ height, overflow: "auto" }}>
      <div style={{ height: totalContentHeight }}>
        <table className="Table" style={{ paddingTop: paddingTop }}>
          <tbody>
            {rows.map((row) => (
              <Row key={row.no} data={row} height={rowHeight} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Viewport.defaultProps = {
  height: 500,
  data: [],
  nodePadding: 2,
};

Viewport.propTypes = {
  height: PropTypes.number,
  data: PropTypes.array,
  nodePadding: PropTypes.number,
};

export default Viewport;
