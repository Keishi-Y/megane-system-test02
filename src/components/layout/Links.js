import React from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  House,
  CardHeading,
  Eyeglasses,
  GearFill,
} from "react-bootstrap-icons";
import TextWithIcon from "../text/TextWithIcon";

const LinkItem = ({ pathname, pageName, icon }) => {
  const black = "black";
  const cyan = "#17A2AE";

  const history = useHistory();
  const location = useLocation();
  return (
    <Nav.Link
      onClick={() => {
        history.push(pathname);
      }}
      style={{ color: location.pathname === pathname ? cyan : black }}
    >
      <TextWithIcon icon={icon} text={pageName} />
    </Nav.Link>
  );
};

export const Links = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav className="flex-column">
      <LinkItem pathname="/" pageName="Home" icon={<House />} />
      <LinkItem
        pathname="/clinic-charts"
        pageName="カルテ編集"
        icon={<CardHeading />}
      />
      <LinkItem
        pathname="/frame-info"
        pageName="フレーム情報編集"
        icon={<Eyeglasses />}
      />
      {/* <LinkItem
        pathname="/account-info"
        pageName="アカウント情報"
        icon={<PersonFill />}
      /> */}
      <LinkItem pathname="/setting" pageName="アプリ設定" icon={<GearFill />} />
    </Nav>
  );
};
