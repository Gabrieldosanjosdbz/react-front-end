//Está importação do React antigamente era necessaria, hj em dia nao precisa mais
// eslint-disable-next-line no-unused-vars
import React from 'react'

// 4 - template expression

const TemplateExpression = () => {
    const name = "Gabriel"

    const data = {
        age: 18,
        job: "Programador"
    }

    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <p>Bem vindo {name}</p>
            <p>Sua idade é {data.age} e seu trabalho é {data.job}</p>
        </div>
    )
}

export default TemplateExpression;