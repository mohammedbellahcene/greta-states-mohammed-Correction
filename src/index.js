import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Compteurs from "./components/Compteurs";
import Converters from "./components/Converters";
import Selecteurs from "./components/Selecteurs";
import Configurator from "./components/Configurator";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="compteurs" element={<Compteurs />} />
        <Route path="converters" element={<Converters />} />
        <Route path="selecteurs" element={<Selecteurs />} />
        <Route path="configurateur" element={<Configurator />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
