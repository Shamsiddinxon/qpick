import React from "react";
import { Context } from "../Context/singlitemId";

const SinglItem = () => {
  const singlItems = React.useContext(Context);

  return [singlItems.state, singlItems.setState];
};

export default SinglItem;
