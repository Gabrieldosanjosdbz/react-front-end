import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    // o nome da constante, diferente do useParams, pode ser qualquer coisa
    const [SearchParams] = useSearchParams();
    
    const url = "http://localhost:3000/products?" + SearchParams;
    
    const {data: items }= useFetch(url);

    console.log(SearchParams)
  return (
    <div>
        <h1>Resultados da pesquisa</h1>
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

export default Search