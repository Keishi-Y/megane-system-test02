import React from "react";
import LoginButton from "../auth/LoginButton";
import { Navbar } from "react-bootstrap";
import UserProfileDropdown from "../user/UserProfileDropdown";
import * as config from "../../app.config.json";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar
      style={{
        borderBottom: "solid 1.5px #f3f4f4",
        height: "56px",
        marginBottom: "20px",
        background: "#fff",
        boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.5)",
      }}
      expand="lg"
      className="justify-content-between"
    >
      {isAuthenticated ? (
        <Navbar.Brand href="/mypage">{config.app.name}</Navbar.Brand>
      ) : (
        <Navbar.Brand href="/">{config.app.name}</Navbar.Brand>
      )}
      <LoginButton />
      <UserProfileDropdown />
    </Navbar>
  );
};
