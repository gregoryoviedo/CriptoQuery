import React from "react";
import Cards from "./cards";
import "./styles.css";

import Cripto1 from "../../assets/cripto1.png";
import Cripto2 from "../../assets/cripto2.png";
import Cripto3 from "../../assets/cripto3.png";

const CardsProps = [
  {
    title: "Este al tanto de las novedades",
    text: "Comienza a investigar en el mercado de criptomonedas y a invertir en lo que mejor este dando rentabilidad en el momento",
    source: Cripto1,
  },
  {
    title: "Mineria de criptomonedas",
    text: "Descubre cuales son las criptomonedas mas minadas del momento, y asi poder estimar su valor para futuras ganancias",
    source: Cripto2,
  },
  {
    title: "Aumenta tu valor con el tiempo",
    text: "Saca margenes de ganancias de las criptomonedas que tengas en tu monedero, para saber cual es el mejor momento para vender",
    source: Cripto3,
  },
];

const Inicio = () => {
  return (
    <div className="inicio__container">
      <div className="container">
        <div className="container__header">
          <div className="header__title">
            <h1>
              Cripto<strong>Query</strong>
            </h1>
            <div className="subtitulo">
              <p>Siempre este enterado del precio de las criptomonedas</p>
              <p>
                la investigacion de hoy puede ser el fruto del dia siguiente
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {CardsProps.map((item) => (
            <Cards source={item.source} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
