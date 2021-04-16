import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image } from "react-bootstrap";

export const UserProfileAvatar = (props) => {
  const { user } = useAuth0();
  return (
    <Image
      style={{ width: "30px" }}
      src={user.picture}
      roundedCircle
      {...props}
    />
  );
};
