import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { AuthContext } from "../../service/authContext/AuthContext";

import useTranslation from "../custom/useTranslation/UseTranslation";

const LogOut = () => {

  const translate = useTranslation();
  const { handleLogout } = useContext(AuthContext);

  return (
    <Button variant="danger" onClick={handleLogout}>
      {translate("logout")}
    </Button>
  );
};

export default LogOut;
