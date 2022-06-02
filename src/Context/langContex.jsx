import React from "react";
import { createContext, useState, useEffect } from "react";

const Contextt = createContext();

function Provider({ children }) {
  const [state, setState] = useState(localStorage.getItem("lang") || "ru");

  useEffect(
    (e) => {
      window.localStorage.setItem("lang", state);
    },
    [state]
  );

  return (
    <Contextt.Provider value={{ state, setState }}>
      {children}
    </Contextt.Provider>
  );
}

export { Contextt, Provider };
