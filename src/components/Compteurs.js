import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
  const [compteur, setCompteur] = useState(1);
  const [compteur2, setCompteur2] = useState(1);
  console.log("HELLO");

  return (
    <div className="bgdCompteurs">
      <span>COMPTEUR EXEMPLE </span>
      {
        compteur < 9 ? <button
          onClick={() => {
            setCompteur(compteur + 1);
          }}
        >
          +
        </button> : null
      }


      {
        compteur > 0 ? <button
          onClick={() => {
            setCompteur(compteur - 1);
          }}
        >
          -
        </button> : null
      }



      <span> {compteur} </span>

      <span>COMPTEUR EXEMPLE 2</span>
      {
        compteur2 < 9 ? <button
          onClick={() => {
            setCompteur2(compteur2 + 1);
          }}
        >
          +
        </button> : null
      }


      {
        compteur2 > 0 ? <button
          onClick={() => {
            setCompteur2(compteur2 - 1);
          }}
        >
          -
        </button> : null
      }



      <span> {compteur2} </span>
      <span> Total </span>
      {
        (compteur2 + compteur) < 18 ? <span> {compteur + compteur2} </span> : null
      }




    </div>
  );
};

export default Compteurs;

