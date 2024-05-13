import { useState } from "react"

function ListRender() {
    const [list] = useState(["Mathes", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        {id: 1, name: "Gabriel", age: 18},
        {id: 2, name: "Brennon", age: 19},
        {id: 3, name: "Erick", age: 20}
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id)
        );
    }

  return (
    <div>
        <ul>
            {/* 4 - Render sem key */}
            {list.map((item, index) => (
                
                // eslint-disable-next-line react/jsx-key
                <li key={index}>{item}</li>
            ))}
        </ul>

        {/* 5 - render com key */}
        <ul>
            {/*Posso usar o index como chave tbm, mas é melhor usar o id */}
            {users.map((user, index) => (   
                <li key={index}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>

        {/* 6 - previos state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender