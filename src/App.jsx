import './App.css'
import Events from './components/Events';

// 2 - importando componente
import FirstComponent from "./components/FirstComponent";

// 4 - template expression
import TemplateExpression from './components/TemplateExpression';

function App() {
  // 3 - Comentários
  return (
    <div className='App'>
      {/*Comentarios dentro do JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
    </div>
  )
}

export default App
