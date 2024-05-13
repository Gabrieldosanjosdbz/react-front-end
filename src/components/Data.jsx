import { useState } from "react"

function Data() {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            {/*sempre quando eu clico no botão, ele adiciona mais um no anotherNumber */}
            <button onClick={() => setAnotherNumber((prev) => prev + 1)}>Mudar state</button> 
        </div>
    </div>
  )
}

export default Data