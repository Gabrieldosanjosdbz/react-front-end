import { useState, useEffect, useMemo } from "react"

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    const [premiumNumbers, setPremiumNumbers] = useState(["0", "10", "100"]);

    const memo = useMemo(() => { 

        return premiumNumbers
    }, [premiumNumbers])
    
    useEffect(() => {
        console.log("Premium numbers foi alterado");

    }, [premiumNumbers])

  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {memo.includes(number) ? <p>Acertou o número</p> : ""}
        <button onClick={() => setPremiumNumbers([...premiumNumbers, "20"])}>adiconar</button>

        <hr />
    </div>
  )
}

export default HookUseMemo