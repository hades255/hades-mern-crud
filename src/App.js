import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./router";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
