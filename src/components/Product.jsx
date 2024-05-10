import { useFetch } from "../hooks/useFetch"

// serve para eu extrair a variavel (que esta com ":") da URL
import { useParams, Link } from "react-router-dom"

const Product = () => {
  //o nome tem que ser igual ao que vem da URL   
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: product } = useFetch(url);

  if(!product) return <p>carregando... </p>

  return (
    <div>
        <p>ID do produto: {id}</p>
        <div>
            <h1>{product.name}</h1>
            <p>R${product.price}</p>

            {/* 8 - nested route (rotas aninhadas) */}
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
    </div>
  )
}

export default Product