import React, { Fragment } from "react";
import PropTypes from "prop-types";
// FC
const PrimeraApp = ({ saludo, subtitulo = "Soy un subtitulo" }) => {
  return (
    <Fragment>
      <h1>{saludo} </h1>
      {/* <pre>{JSON.stringify(saludo, null,3)}</pre> */}
      <p>{subtitulo} </p>
    </Fragment>
  );
};

// nombre del componente, hace uso de PropTypes para especificar ciertas validacionas a cada prop
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

// Definir valor por defecto de un prop
// PrimeraApp.defaultProps = {
//   subtitulo: "Soy un subtitulo",
// };

export default PrimeraApp;
