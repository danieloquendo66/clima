import React, { useState } from "react";

const Foemulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  //state validacion
  const [error, guardarError] = useState(false);

  //extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  //funcion que coloca los elementos en el state
  const handleChange = (e) => {
    //actualizar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario da summit

  const handleSubmit = (e) => {
    e.preventDefault();

    //vlaidar
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    guardarConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="ciudad">Ciudad:</label>
      <div className="input-filed col s12">
        {error ? (
          <p className="red darken-4 error">
            Todos los campos son obligatorios
          </p>
        ) : null}
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
      </div>

      <div className="input-filed col s12">
        <label htmlFor="pais">País:</label>
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">--Seleccione un País</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Foemulario;
