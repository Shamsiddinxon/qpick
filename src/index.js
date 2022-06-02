import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Providers as SinglProviders } from "./Context/singlitemId";
import { Provider as KarzinkaProvider } from "./Context/karzinka";
import { Provider as SelectedProvider } from "./Context/selectedContext";
import { Provider as LangProvider } from "./Context/langContex";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <KarzinkaProvider>
          <SinglProviders>
            <SelectedProvider>
              <App />
            </SelectedProvider>
          </SinglProviders>
        </KarzinkaProvider>
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
