import React from "react";
import rates from "../assets/rates";

const currenciesList = Object.keys(rates);

const CurrencyMenu = () => {
  return (
    <>
      {currenciesList.map((el) => {
        return <option value={el}>{el}</option>;
      })}
    </>
  );
};
// ca marcherait aussi bien en utilisant un tableau et on boucle avec PUSH
// Puis ca rend un tableau de options. On peut directement utiliser {[tableau]} dans jsx

export default CurrencyMenu;
