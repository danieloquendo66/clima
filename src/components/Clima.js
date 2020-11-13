import React from "react";
const Clima = ({ resultado }) => {
  const { name, main } = resultado;

  if (!name) return null;

  //grados kelvin

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>EL clima de {name} es:</h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} <samp>&#x2103;</samp>
        </p>
        <p>
          Temperatura Máxima:
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}{" "}
          <samp>&#x2103;</samp>
        </p>
        <p>
          Temperatura minima:
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}{" "}
          <samp>&#x2103;</samp>
        </p>
      </div>
    </div>
  );
};

export default Clima;
