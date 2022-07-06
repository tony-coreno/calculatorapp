import { useState } from "react";
import "./styles.css";
import Swal from "sweetalert2";

const App = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = (a, b) => setResultado(a + b);
  const restar = (a, b) => setResultado(a - b);
  const mult = (a, b) => setResultado(a * b);
  const div = (a, b) =>
    b > 0
      ? setResultado(a / b)
      : Swal.fire({
          icon: "error",
          title: "Resultado indefinido",
          showConfirmButton: false,
          timer: 1200,
        });

  const limpiar = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Calculator App</h1>
        <hr />
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              autoFocus
              onChange={(e) => setInput1(parseInt(e.target.value))}
              placeholder="0.0"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setInput2(parseInt(e.target.value))}
              placeholder="0.0"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder={resultado}
              readOnly
            />
          </div>
        </div>
        <div className="row">
          <div className="col mt-4">
            <button
              className="btn btn-primary btn-block"
              onClick={() => sumar(input1, input2)}
            >
              Sumar
            </button>
          </div>
          <div className="col mt-4">
            <button
              className="btn btn-success btn-block"
              onClick={() => restar(input1, input2)}
            >
              Restar
            </button>
          </div>
          <div className="col mt-4">
            <button
              className="btn btn-dark btn-block"
              onClick={() => mult(input1, input2)}
            >
              Multiplicar
            </button>
          </div>
          <div className="col mt-4">
            <button
              className="btn btn-warning btn-block"
              onClick={() => div(input1, input2)}
            >
              Dividir
            </button>
          </div>
        </div>
        <div className="boton">
          <button
            className="btn btn-danger btn-block mt-4"
            onClick={() => limpiar()}
          >
            Reset
          </button>
        </div>
        <a href="https://www.github.com/tony-coreno" target="_blank"><img src="https://img.icons8.com/glyph-neue/64/000000/github.png" alt="git"/></a>
      </div>
    </>
  );
};

export default App;
