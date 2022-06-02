import React from "react";
import { Contextt } from "../Context/langContex";

const LangContex = () => {
  const langItem = React.useContext(Contextt);

  return [langItem.state, langItem.setState];
};

export default LangContex;
