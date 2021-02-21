import { Fragment, useState } from "react";
import PropTypes from "prop-types";

// Acuerdate de usar rafcp para crear toa esa verga de un solo
const CounterApp = ({ value = 10 }) => {
  // UseState retorna un arreglo con dos valores
  // counter es el actual del estado, y setcounter cambia ese valor
  const [counter, setCounter] = useState(value);

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  // handleSubstract
  const handleSubstract = () => {
    setCounter(counter - 1);
  };
  // handleReset
  const handleReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
