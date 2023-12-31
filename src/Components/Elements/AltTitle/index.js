import React from "react";
import * as C from "./styles";

const AltTitle = ({ title, ...props }) => {
  return (
    <C.AltTitle>
      <div></div>
      <h1>{title}</h1>
    </C.AltTitle>
  );
};

export default AltTitle;
