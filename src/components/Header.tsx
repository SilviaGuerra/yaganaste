import { Header } from "antd/es/layout/layout";
import React from "react";

const HeaderComponent = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <img
        src="https://www.yaganaste.com/mx/assets/img/logo_full.png"
        alt="logo ya ganaste header"
      />
    </Header>
  );
};

export default HeaderComponent;
