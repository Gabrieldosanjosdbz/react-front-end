import { useLayoutEffect, useEffect, useState } from "react"

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Algum nome");

    useEffect(() => {
        console.log("2")
        setName("Mudou de novo!")
    }, [])

    useEffect(() => {
        console.log("3");
        setName("Mudou de novo 3!")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    }, [])
    
  return (
    <div>
        <h2>HookUseLayoutEffect</h2>
        <p>Nome: {name}</p>
    </div>
  )
}

export default HookUseLayoutEffect