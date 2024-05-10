import './App.css'
import { Outlet } from 'react-router-dom'

// 5 - link entre paginas
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <div className='App'>
      <Navbar />
      {/* 9 - search */}
      <SearchForm />
        {/* este outlet sera o conteudo das nossas paginas */}
        <Outlet />  
      <p>Footer</p>
    </div>
  )
}

export default App
