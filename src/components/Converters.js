import React, { useState } from "react";
import CurrencyMenu from "./CurrencyMenu";
import rates from "../assets/rates";
import { ArrowDown, ArrowUp } from "../assets/icons";
import "./Converters.css";

const Converters = () => {
  const [Curr1, setCurr1] = useState("EUR");
  const [Curr2, setCurr2] = useState("USD");
  const [amount, setAmount] = useState(["", ""]);
  let rate1 = rates[Curr1];
  let rate2 = rates[Curr2];

  return (
    <div className="motherbox">
      <h1>CURRENCIES CONVERTER</h1>
      <input
        type="text"
        className="inputConv"
        name="currency1"
        placeholder="entrez un chiffre"
        value={amount[0]}
        onChange={(event) => {
          setAmount([
            event.target.value,
            Math.floor((event.target.value * 1000 * rate2) / rate1) / 1000,
          ]);
        }}
      ></input>
      <select
        value={Curr1}
        onChange={(event) => {
          setCurr1(event.target.value);
          //aussi ici declencher le chamgement de conversion car on a change de devise
        }}
        className="selectConv"
      >
        <CurrencyMenu></CurrencyMenu>
      </select>
      <div>
        <ArrowUp></ArrowUp>
        <ArrowDown></ArrowDown>
      </div>
      🙆‍♀️
      <input
        type="text"
        className="inputConv"
        placeholder="entrez un chiffre"
        name="currency1"
        value={amount[1]}
        onChange={(event) => {
          setAmount([
            Math.floor((event.target.value * 1000 * rate1) / rate2) / 1000,
            event.target.value,
          ]);
        }}
      ></input>
      <select
        value={Curr2}
        className="selectConv"
        onChange={(event) => {
          setCurr2(event.target.value);
        }}
      >
        <CurrencyMenu></CurrencyMenu>
      </select>
    </div>
  );
};

export default Converters;
