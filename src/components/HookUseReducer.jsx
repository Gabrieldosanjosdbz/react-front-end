import { useReducer, useState } from "react"

const HookUseReducer = () => {

    // 1 - começando com o useReducer

    {/*state é o valor atual dos dados e action é oq vai ser feito e contém parametros para alterar nosso dado*/}
    const [number, dispatch] = useReducer((state, action) => { 
        return Math.random(state);
    }, 10 )

    // 2 - avançando no useReducer
    const initialTasks = [
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Fazer outra coisa"},
    ];

    const taskReducer = (state, action) => {

        switch(action.type) {
            case "ADD":
                // eslint-disable-next-line no-case-declarations
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

            setTaskText("");

            return [...state, newTask];
                
            case "DELETE":
                return state.filter((task) => task.id !== action.id)

            // eslint-disable-next-line no-fallthrough
            default:
                return state;
        }
    };

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks( {type: "ADD"} )
    }

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id})
    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número</button>
        <h3>Tarefas</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
            <input type="submit" value="Enviar"/>
        </form>
        <ul>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
        </ul>

        <hr />
    </div>
  )
}

export default HookUseReducer;