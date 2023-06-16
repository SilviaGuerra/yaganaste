import { Footer } from "antd/es/layout/layout";
import React from "react";

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ya Ganaste ©{new Date().getFullYear()} Silvia Guerra
    </Footer>
  );
};

export default FooterComponent;
