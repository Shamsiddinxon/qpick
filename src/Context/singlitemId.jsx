import React from "react";
import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Providers({ children }) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("singlprodukt")) || []
  );

  useEffect((e) => {
    window.localStorage.setItem("singlprodukt", JSON.stringify([...state]));
  });

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
}

export { Context, Providers };
