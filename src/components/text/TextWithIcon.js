import React from "react";

// interface IProps {
//   icon: JSX.Element;
//   text: string;
// }
const TextWithIcon = ({ icon, text }) => {
  return (
    <div>
      <span style={{ paddingRight: "10px" }}>{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default TextWithIcon;
