import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavDropdown, Dropdown } from "react-bootstrap";
import { UserProfileAvatar } from "./UserProfileAvatar";

const UserProfileDropdown = (props) => {
  const { user, isAuthenticated, logout } = useAuth0();
  return isAuthenticated ? (
    <NavDropdown
      alignRight
      title={<UserProfileAvatar {...props} />}
      id="basic-nav-dropdown"
    >
      <Dropdown.Header>
        <div>アカウント名：{user.username}</div>
      </Dropdown.Header>
      <NavDropdown.Divider />
      {/* <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#/action-3">Something else</NavDropdown.Item> */}
      <NavDropdown.Divider />
      <NavDropdown.Item>
        <div
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          → ログアウト
        </div>
      </NavDropdown.Item>
    </NavDropdown>
  ) : null;
};
export default UserProfileDropdown;
