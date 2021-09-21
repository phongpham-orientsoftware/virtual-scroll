import { memo } from "react";
import PropTypes from "prop-types";

function Row(props) {
  const { height, data } = props;

  return (
    <tr style={{ height }}>
      <td>{data.no}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.age}</td>
      <td>{data.email}</td>
      <td>{data.userName}</td>
      <td>{data.url}</td>
      <td>{data.gender}</td>
      <td>{data.phoneNumber}</td>
      <td>{data.companyName}</td>
      <td>{data.streetAddress}</td>
      <td>{data.cityName}</td>
      <td>{data.state}</td>
      <td>{data.countryCode}</td>
      <td>{data.zipCode}</td>
    </tr>
  );
}

Row.propTypes = {
  height: PropTypes.number.isRequired,
  data: PropTypes.shape({
    no: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    zipCode: PropTypes.number.isRequired,
  }),
};

export default memo(
  Row,
  (prevProps, nextProps) => prevProps.data !== nextProps.data
);
