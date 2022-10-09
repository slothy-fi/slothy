import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

// displays a page header

export default function Header({ link, title, subTitle, ...props }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "1.2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "start", fontSize: "25px" }}>
        Slothy
      </div>
      {props.children}
    </div>
  );
}

Header.defaultProps = {
  link: "https://github.com/scaffold-eth/scaffold-eth",
  title: "🏗 Scaffold-Eth",
  subTitle: "Forkable Ethereum dev stack focused on fast product iteration",
};
