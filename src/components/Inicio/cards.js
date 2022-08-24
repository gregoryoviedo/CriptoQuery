import React from "react";

const Cards = ({ source, title, text }) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="contenedor_foto">
          <img src={source} alt="criptomenedas" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
