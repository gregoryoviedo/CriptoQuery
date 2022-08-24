import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="container">
        <div className="row py-5">
          <div className="col-6 contenido__footer">
            <p>
              <h4>Que son las criptomonedas</h4>
              Una criptomoneda es un medio digital de intercambio que utiliza
              criptografía fuerte para asegurar las transacciones, controlar la
              creación de unidades adicionales y verificar la transferencia de
              activos usando tecnologías de registro distribuido
            </p>
          </div>
          <div className="col-6">
            <p>
              <h4>Que beneficio traen las criptomonedas</h4>
              La posibilidad de obtener grandes beneficios Eso es porque los
              precios dependen de la oferta de monedas que hay en el
              'blockchain' y de la demanda por parte de los compradores. Esta
              dinámica de oferta y demanda puede generar importantes beneficios
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
