import React, { useState } from "react";
import "./converter.css";


const Converter = () => {
    const [euroValue, setEuroValue] = useState("");
    const [dollarValue, setDollarValue] = useState("");

    return (
        <div>
            <p>Euro</p>
            <input value={euroValue} onChange={event => { !isNaN(event.target.value) && setEuroValue(event.target.value); setDollarValue(event.target.value * 1.2) }} ></input>
            <p>Dollar</p>

            <input value={dollarValue} onChange={event => { !isNaN(event.target.value) && setDollarValue(event.target.value); setEuroValue(event.target.value / 1.2) }} ></input>


        </div>
    )

}
export default Converter;
