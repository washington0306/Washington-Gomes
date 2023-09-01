import React from "react";
import * as C from "./styles";
import LogoBrand from "../../Assets/ls-logo-brand-bigger.png";

const Loading = ({ loading }) => {
  return (
    <C.Loading loading={loading}>
      <div></div>
      <img src={LogoBrand} alt="Washington Gomes" />
    </C.Loading>
  );
};

export default Loading;
