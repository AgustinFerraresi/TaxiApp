import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Protected = ({ children, isSignedIn }) => {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

Protected.propTypes = {
  isSignedIn: PropTypes.bool,
  children: PropTypes.Object,
};
export default Protected;
