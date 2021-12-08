import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
  const [c1, setC1] = useState(2);
  return (
    <div className="bgdCompteurs">
      <span>COMPTEUR EXEMPLE </span>
    </div>
  );
};

export default Compteurs;
