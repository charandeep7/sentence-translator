import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./stylesheet";
import TranslationProvider from "./context/Translation";
import NodeServerProvider from "./context/NodeServer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NodeServerProvider>
        <TranslationProvider>
          <GlobalStyle />
          <App />
        </TranslationProvider>
      </NodeServerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
