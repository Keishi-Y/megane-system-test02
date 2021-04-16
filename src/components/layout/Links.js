import React from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import {
  House,
  CardHeading,
  InfoCircle,
  PersonFill,
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
  return (
    <Nav className="flex-column">
      <LinkItem pathname="/" pageName="Home" icon={<House />} />
      <LinkItem
        pathname="/clinic-records"
        pageName="カルテ編集"
        icon={<CardHeading />}
      />
      <LinkItem
        pathname="/account-info"
        pageName="アカウント情報"
        icon={<PersonFill />}
      />
      <LinkItem
        pathname="/app-info"
        pageName="アプリ情報"
        icon={<InfoCircle />}
      />
    </Nav>
  );
};
