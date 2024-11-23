import PropTypes from "prop-types";

function ErrorPage({ message = "Error" }) {
  return <div>{message}</div>;
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

export default ErrorPage;
