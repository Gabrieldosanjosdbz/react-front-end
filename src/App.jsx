import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';

// guardando a url do JSON-SERVER
const url = ""

import './App.css'

function App() {
  // 1 - resgatando dados
  const [products, setProduct] = useState([]); //state para guardarmos os dados da requisição

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // useEffect(() => {

  //   async function getData() {
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     console.log(data)

  //     setProduct(data)
  //   }

  //   getData();
  // }, []); //executando o useEffect apenas quando a aplicação for iniciada

  // 2 - envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

   const handleSubmit = async (e) => {
    e.preventDefault()
    
    const product = {
      name, 
      price
    };

    // 5 - refatorando post 
    httpConfig(product, "POST");

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product)
    // });

    // // 3 - CARREGAMENTO DINAMICO
    // const addedProduct = await res.json();

    // // to pegando o valor que já tinha e adicionando o novo
    // setProduct((prevDefault) => [...prevDefault, addedProduct]);

  };

  return (
    <div className='App'>
      <h1>HTTP em React</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando...</p>}

      {/* 7 - tratando erro */}
      {error && <p>{error}</p>}
      {/* 1 - resgate de dados */}
      <ul>

        {/* exebindo os dados que estão guardados no state products (array) utilizando o map  */}
        {items &&
        items.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>

      {/* 2 - enviando dados */}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>

          <label>
            <span>Preço</span>
            <input type="text" value={price } onChange={(e) => setPrice(e.target.value)}/>
          </label>

          {/* <input type="submit" value="Enviar"/> */}
          {/* 7 - loading post */}
          {loading && <input type='submit' disabled value="Aguarde" /> }
          {!loading && <input type='submit' value="Criar"/>}
        </form>
      </div>
    </div>
  )
}

export default App
