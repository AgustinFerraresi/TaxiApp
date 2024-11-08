import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Protected = ({ children, allowedRoles  }) => {

  const user = localStorage.getItem("Role")
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user)) {
    return <Navigate to="*" />;
  }

  return children;
};

Protected.propTypes = {
  allowedRoles: PropTypes.array,
  children: PropTypes.node.isRequired,
};
export default Protected;
