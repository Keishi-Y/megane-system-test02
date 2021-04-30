import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Button
      variant="primary"
      onClick={() => {
        logout({
          returnTo: window.location.origin,
        });
      }}
    >
      ログアウト
    </Button>
  );
}

// function LogoutButton(props) {
//   const { isAuthenticated, logout } = useAuth0();

//   return isAuthenticated(
//     <Button
//       variant="outline-primary"
//       onClick={() => {
//         logout({
//           returnTo: window.location.origin,
//         });
//       }}
//       {...props}
//     >
//       ログアウト
//     </Button>
//   );
// }

export default LogoutButton;
