import './App.css';
import {useState} from "react";
import Dado from "./Dado";

function App() {

    function generarAleatorios() {
        const valor1 = Math.trunc(Math.random() * 6) + 1;
        const valor2 = Math.trunc(Math.random() * 6) + 1;
        const valor3 = Math.trunc(Math.random() * 6) + 1;
        return (
            <div>
                <Dado valor={valor1}/>

            </div>
        );
    }
}

/*
const vector = new Array(5);
for (let x = 0; x < vector.length; x++) {
    vector[x] = Math.trunc(Math.random() * 10);
}
setNumeros(vector);
}

const [numeros, setNumeros] = useState([0, 0, 0, 0, 0])

return (
<div className="App">
    <p>Numeros aleatorios</p>
    {numeros.map(num => (
        <p> {num}</p>
    ))}
    <button onClick={generarAleatorios}>Generar valores aleatorios</button>
</div>

 */


export default App;
