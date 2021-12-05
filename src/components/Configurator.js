import { useState } from "react";
import "./Configurator.css";

function Configurator() {
  // le state aura deux valeurs possibles :
  // "option1" dans le cas ou on a clique sur la case du haut
  // "option2" dans le cas ou on a clique sur la case du bas
  const [selecteur1, setSelecteur1] = useState("");
  const [prixOption1, setprixOption1] = useState(0);

  // le state aura deux valeurs possibles :
  // "option1" dans le cas ou on a clique sur la case du haut
  // "option2" dans le cas ou on a clique sur la case du bas

  const [selecteur2, setSelecteur2] = useState("");
  const [prixOption2, setprixOption2] = useState(0);

  return (
    <div className="configCont">
      <span className="configTitle">CONFIGURE TON VELO</span>

      <span className="configTitle"> 1 - Choisis un modèle</span>

      <div
        className={selecteur1 === "option1" ? "selecteurYes" : "selecteurNo"}
        onClick={() => {
          setSelecteur1("option1");
          setprixOption1(500);
        }}
      >
        Vélo de ville (500 Eur)
      </div>
      <div
        className={selecteur1 === "option2" ? "selecteurYes" : "selecteurNo"}
        onClick={() => {
          setSelecteur1("option2");
          setprixOption1(700);
        }}
      >
        Mountain Bike (700 Eur)
      </div>
      <span className="configTitle"> 2 - Choisis ta selle</span>
      <div
        className={selecteur2 === "option1" ? "selecteurYes" : "selecteurNo"}
        onClick={() => {
          setSelecteur2("option1");
          setprixOption2(20);
        }}
      >
        Classique (20 Euros)
      </div>
      <div
        className={selecteur2 === "option2" ? "selecteurYes" : "selecteurNo"}
        onClick={() => {
          setSelecteur2("option2");
          setprixOption2(80);
        }}
      >
        Sur suspension (80 Euros)
      </div>
      <div className="configTitle">PRIX FINAL {prixOption1 + prixOption2}</div>
    </div>
  );
}

export default Configurator;
