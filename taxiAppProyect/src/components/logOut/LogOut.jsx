import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import useTranslation from "../custom/useTranslation/UseTranslation";

const LogOut = () => {
  const navigate = useNavigate();
  const translate = useTranslation();
  const handlerLogOut = () => {
    localStorage.clear("token");
    navigate("/");
  };

  return (
    <Button variant="danger" onClick={handlerLogOut}>
      {translate("logout")}
    </Button>
  );
};

export default LogOut;
