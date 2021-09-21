import { memo } from "react";
import PropTypes from "prop-types";

function Row(props) {
  const {
    no,
    firstName,
    lastName,
    age,
    email,
    userName,
    url,
    gender,
    phoneNumber,
    companyName,
    streetAddress,
    cityName,
    state,
    countryCode,
    zipCode,
    ...restProps
  } = props;

  return (
    <tr {...restProps}>
      <td>{no}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>{userName}</td>
      <td>{url}</td>
      <td>{gender}</td>
      <td>{phoneNumber}</td>
      <td>{companyName}</td>
      <td>{streetAddress}</td>
      <td>{cityName}</td>
      <td>{state}</td>
      <td>{countryCode}</td>
      <td>{zipCode}</td>
    </tr>
  );
}

Row.propTypes = {
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
};

export default memo(
  Row,
  (prevProps, nextProps) => prevProps.no !== nextProps.no
);
