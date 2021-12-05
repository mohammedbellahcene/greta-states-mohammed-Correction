import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  return (
    <div className="bgdCompteurs">
      <span>COMPTEUR 1 </span>
      <div className="compteur">
        {c1 > 0 && (
          <button
            onClick={() => {
              setC1(c1 - 1);
            }}
          >
            -
          </button>
        )}

        <span>{c1}</span>
        {c1 < 11 && c1 + c2 < 18 && (
          <button
            onClick={() => {
              setC1(c1 + 1);
            }}
          >
            +
          </button>
        )}
      </div>
      <span>COMPTEUR 2 </span>
      <div className="compteur">
        {c2 > 0 && (
          <button
            onClick={() => {
              setC2(c2 - 1);
            }}
          >
            -
          </button>
        )}
        <span>{c2}</span>

        {c1 < 11 && c1 + c2 < 18 && (
          <button
            onClick={() => {
              setC2(c2 + 1);
            }}
          >
            +
          </button>
        )}
      </div>

      <span>TOTAL </span>
      {c1 + c2}
    </div>
  );
};

export default Compteurs;
