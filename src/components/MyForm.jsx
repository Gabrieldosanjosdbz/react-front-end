import "./MyForm.css"

import { useState } from "react";

const MyForm = ({userName, UserEmail}) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(UserEmail);

    const [bio, setBio] = useState("");

    const [role, setRole] = useState("");

    const handleName = (e) => {

        // aqui estou salvando state name o valor do input name toda vez que ele for alterado através do onChange
        setName(e.target.value); 
    }

    // 5 - envio de form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio, role);

        //validacao
        //envio

        //7 - limpar a form
        setName("")
        setEmail("")
        setBio("");
        setRole("");
    }

  return (
    <div>
        {/* 1 - criação de form */}
        {/* 5 - envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}
                // 6 - controlled input
                value={name || ""}
                />
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* Simplificando manipulação */}
                <input type="text" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
            </label>

            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bii" placeholder="Descrição do usuario" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm;