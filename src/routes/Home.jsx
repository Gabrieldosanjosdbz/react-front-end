// 6 - carregamento de dados
import { useFetch } from "../hooks/useFetch"

const url = "http://localhost:3000/products"

// 7 - rota dinamica
import { Link } from "react-router-dom"

const Home = () => {
    const {data: items }= useFetch(url)
    return (
      <div>
          <h1>Home</h1>
          <ul className="products">
          {items &&
          items.map((product) => (
                <li key={product.id}>
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                  {/* 7 - rota dinamica */}
                  <Link to={`products/${product.id}`}>Detalhes</Link>
                </li>
          ))}
            </ul>
      </div>
    )
  }
  
  export default Home