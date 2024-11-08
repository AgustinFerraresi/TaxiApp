import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../service/authContext/AuthContext";

const Protected = ({ children, allowedRoles  }) => {

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="*" />;
  }

  return children;
};

Protected.propTypes = {
  isSignedIn: PropTypes.bool,
  children: PropTypes.Object,
};
export default Protected;
