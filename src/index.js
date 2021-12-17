import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Compteurs from "./components/Compteurs";
import Selecteurs from "./components/selecteur";
import Converter from "./components/converter";
import Listedecourse from "./components/listedecourse";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="compteurs" element={<Compteurs />} />
        <Route path="selecteur" element={<Selecteurs />} />
        <Route path="convertor" element={<Converter />} />
        <Route path="liste" element={<Listedecourse />} />
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
