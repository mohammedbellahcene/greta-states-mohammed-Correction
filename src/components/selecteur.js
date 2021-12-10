import React, { useState } from "react";
import "./selecteur.css";

const Selecteurs = () => {

    const [rang, selectrang] = useState(1)
    const [rang1, selectrang1] = useState(0)



    return (
        <div className="selectcontainer">
            <div className="squares">
                <div className={rang === 1 ? "green" : "orange"} onClick={() => {
                    selectrang(1)

                }}>


                </div>
                <div className={rang === 2 ? "green" : "orange"} onClick={() => {
                    selectrang(2)

                }}>


                </div>
                <div className={rang === 3 ? "green" : "orange"} onClick={() => {
                    selectrang(3)

                }}>


                </div>
            </div>
            <div className="lionscontainer">
                <div className={rang1 === 1 ? "lion1" : "orangelions"} onClick={() => {
                    selectrang1(1)

                }}>


                </div>
                <div className={rang1 === 2 ? "lion2" : "orangelions"} onClick={() => {
                    selectrang1(2)

                }}>


                </div>
                <div className={rang1 === 3 ? "lion3" : "orangelions"} onClick={() => {
                    selectrang1(3)

                }}>


                </div>



            </div>
        </div>
    )

}
export default Selecteurs;
