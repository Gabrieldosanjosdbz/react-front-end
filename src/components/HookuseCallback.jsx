import { useCallback, useState } from "react"
import List from "./List";

const HookuseCallback = () => {
    const [counter, setCounter] = useState(0)

    // a função só serar executada na renderização do componente, evitando toda hora a chamada no List.jsx
    const getItemsFromDatabase = useCallback(() => {
        return ["a", "b", "c"];
    }, [])

  return (
    <div>
        <h2>useCallback</h2>
        <List getItems={getItemsFromDatabase} />
        <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
        <p>{counter}</p>
        <hr />
    </div>
  )
}

export default HookuseCallback