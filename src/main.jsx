import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Contact from './routes/Contact.jsx'

// 2 - pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'

// 3 - componente base
import Home from './routes/Home.jsx'

// 7 - rota dinamica 
import Product from './components/Product.jsx'

// um array de objeto onde vamos definir as paginas
const router = createBrowserRouter ([
  {
    element: <App />,
    errorElement: <ErrorPage />, //aqui estou dizendo que se caso a pagina tiver um erro o usuario sera direcionado para este componente
    // 3 -componente base
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      // 7 - rota dinamica 
      {
        path: "products/:id",
        element: <Product />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Para fazer a exibição das rotas nós chamamos o RouterProvider */}
    {/* Ele recebe uma props que é o nosso array de objetos das rotas */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
