import React from "react";
import { Contextt } from "../Context/karzinka";

const KarzinkaHook = () => {
  const karItem = React.useContext(Contextt);

  return [karItem.states, karItem.setStates];
};

export default KarzinkaHook;
