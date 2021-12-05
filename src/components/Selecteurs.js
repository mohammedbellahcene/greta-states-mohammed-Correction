import "./Selecteurs.css";
import { useState } from "react";

const ad1 =
  "https://static.lexpress.fr/medias_11639/w_1815,h_1362,c_crop,x_0,y_0/w_605,h_350,c_fill,g_north/v1540563959/bantu-un-lionceau-de-deux-mois-ne-en-captivite-au-zoo-de-cali-au-sud-de-medellin-en-colombie-le-25-octobre-2012_5959258.jpg";
const ad2 = "https://i.ytimg.com/vi/sKMoS8MhKxk/maxresdefault.jpg";
const ad3 =
  "https://cdn.radiofrance.fr/s3/cruiser-production/2020/10/7578915d-db11-4479-b86e-319af2cdcc18/870x489_captxwure.jpg";

const Selecteurs = () => {
  const [select, setSelect] = useState(null);
  const [select2, setSelect2] = useState(null);
  return (
    <div
      className="seleceursContainer"
      onClick={() => {
        setSelect(null);
        setSelect2(null);
      }}
    >
      <div className="selectorContainer">
        <span> SELECTEURS 1</span>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setSelect(0);
          }}
          className={select === 0 ? "selected1" : "selector1"}
        ></div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setSelect(1);
          }}
          className={select === 1 ? "selected1" : "selector1"}
        ></div>
        <div
          onClick={(e) => {
            setSelect(2);
            e.stopPropagation();
          }}
          className={select === 2 ? "selected1" : "selector1"}
        ></div>
      </div>

      <div className="selectorContainer">
        <span> SELECTEURS 2</span>
        {select2 === 0 ? (
          <img
            src={ad1}
            onClick={(e) => {
              e.stopPropagation();
              setSelect2(null);
            }}
            onMouseLeave={(e) => {
              setSelect2(null);
            }}
            className="imgselector"
          ></img>
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSelect2(0);
            }}
            className="selector2"
          ></div>
        )}
        {select2 === 1 ? (
          <img
            src={ad2}
            onClick={(e) => {
              e.stopPropagation();
              setSelect2(null);
            }}
            className="imgselector"
            onMouseLeave={(e) => {
              setSelect2(null);
            }}
          ></img>
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSelect2(1);
            }}
            className="selector2"
          ></div>
        )}
        {select2 === 2 ? (
          <img
            src={ad3}
            onClick={(e) => {
              e.stopPropagation();
              setSelect2(null);
            }}
            onMouseLeave={(e) => {
              setSelect2(null);
            }}
            className="imgselector"
          ></img>
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSelect2(2);
            }}
            className="selector2"
          ></div>
        )}
      </div>
    </div>
  );
};

export default Selecteurs;
