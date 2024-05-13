import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './routes/Home';
import Contact from './routes/Contact';

// 2 - criando provider
import { CounterContexctProvider } from './context/CounterContext.jsx';

// 5 - contexto mais complexo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const router = createBrowserRouter ([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContexctProvider>
      {/* consigo color contexto dentro de contexto usando esse cadeamento */}
      <TitleColorContextProvider>
        <RouterProvider router={router}/>
      </TitleColorContextProvider>
    </CounterContexctProvider>
  </React.StrictMode>
)
