// ./client/client.js

import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./app";

export function renderReactDom() {
  const root = document.querySelector("#root");
  const appJsx = (
    <>
      <StrictMode>
        <App />
      </StrictMode>
    </>
  );
  // render root element
  render(appJsx, root);
}

/* eslint wrap-iife: ["error", "inside"] */
(function wrapIIFE() {
  renderReactDom();
})();

export default renderReactDom;
