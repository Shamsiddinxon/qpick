import React from "react";
import { createContext, useState, useEffect } from "react";

const Contextt = createContext();

function Provider({ children }) {
  const [states, setStates] = useState(
    JSON.parse(localStorage.getItem("karzink")) || []
  );

  useEffect((e) => {
    window.localStorage.setItem("karzink", JSON.stringify([...states]));
  });

  return (
    <Contextt.Provider value={{ states, setStates }}>
      {children}
    </Contextt.Provider>
  );
}

export { Contextt, Provider };
