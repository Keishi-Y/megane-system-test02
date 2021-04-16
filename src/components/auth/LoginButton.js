import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return <Button onClick={loginWithRedirect}>ログイン</Button>;
  } else {
    return null;
  }
}

export default LoginButton;
