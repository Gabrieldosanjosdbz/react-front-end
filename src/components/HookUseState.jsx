import { useState } from "react"
const HookUseState = () => {
    // 1 - useState
    let userName = "Kay";

    const [name, setName] = useState("Gabriel");

    const changeNames = () => {
        // nao vai alterar
        userName = "Kaynah Lima"

        // vai alterar
        setName("Gabriel dos Anjos")
    }

    // 2 - useState e input
    const [age, setAge] = useState("18");

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age);

        // zerando a inputs depois
        // setAge("");
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        {/* 2 - useState e input */}
        <form onSubmit={handleSubmit}> {/*Função que será disparada quando enviar o formulario e ela ja recebe os dados que foram passados para ser usado */}
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/> {/*função que irá disparar quando o input for alterado */}
            <input type="submit" value="enviar"/> {/*botão para enviar o formulario */}
        </form>
        <p>Você tem {age} anos.</p>
        
        <hr />

    </div>
  )
}

export default HookUseState