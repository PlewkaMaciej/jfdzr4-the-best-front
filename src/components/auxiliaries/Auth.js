import { useContext } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../controllers/UserContext";

const Auth = ({ children }) => {
  const { uid } = useContext(UserContext);

  if (uid) {
    return <>{children}</>;
  }

  return <Redirect to="/" />;
};

export default Auth;
