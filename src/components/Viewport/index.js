import { useMemo } from "react";
import PropTypes from "prop-types";

import Row from "./components/Row";
import useWindowPosition from "../../hooks/useWindowPosition";

import "./styles.css";

function Viewport(props) {
  const { height, data, nodePadding } = props;

  const currentScrollTop = useWindowPosition("#viewport");

  const { rowHeight, totalContentHeight, paddingTop, rows } = useMemo(() => {
    const result = {
      rowHeight: 25,
      totalContentHeight: height,
      paddingTop: 0,
      rows: [],
    };

    if (data.length === 0) return result;

    const totalRows = data.length;

    const visibleRows = Math.ceil(height / result.rowHeight) + nodePadding;

    result.totalContentHeight = totalRows * result.rowHeight;

    let startRow = currentScrollTop / result.rowHeight;
    startRow = Math.min(startRow, totalRows - visibleRows);

    result.paddingTop = startRow * result.rowHeight;

    const endRow = startRow + visibleRows;

    result.rows = data.slice(startRow, endRow);

    return result;
  }, [height, data, nodePadding, currentScrollTop]);

  return (
    <div id="viewport" style={{ height, overflow: "auto" }}>
      <div style={{ height: totalContentHeight }}>
        <table
          className="Table"
          cellPadding="0"
          cellSpacing="0"
          style={{ paddingTop }}
        >
          <tbody>
            {rows.map((row) => (
              <Row key={row.no} style={{ height: rowHeight }} {...row} />
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
