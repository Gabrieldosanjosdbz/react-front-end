import "./MyForm.css"

import { useState } from "react";

const MyForm = () => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {

        // aqui estou salvando state name o valor do input name toda vez que ele for alterado através do onChange
        setName(e.target.value); 
    }

    // 5 - envio de form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email);

        //validacao
        //envio
    }

  return (
    <div>
        {/* 1 - criação de form */}
        {/* 5 - envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* Simplificando manipulação */}
                <input type="text" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm;