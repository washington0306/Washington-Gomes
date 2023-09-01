import React from "react";
import * as C from "./styles";
import LogoBrand from "../../Assets/ls-logo-brand.png";

const Footer = () => {
  return (
    <C.Footer>
      <small>
        Produzido e Desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/jos%C3%A9-washington-a53428184/">
          José Washington Gomes
        </a>
        .
      </small>
      <img src={LogoBrand} alt="José Washington" />
    </C.Footer>
  );
};

export default Footer;
