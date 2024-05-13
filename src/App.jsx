import './App.css'

// 2 - imagem em assets
import night from "./assets/city.jpg"

// 3 - useState
import Data from './components/Data'

// 4 - renderização de lista
import ListRender from './components/ListRender'

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName';

// 9 - desestruturando props
import CarDetails from './components/CarDetails'

// 11 - renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 2000000},
  {id: 3, brand: "Renault", color: "Azul", km: 3200000}
];

// 12 - fragments
import Fragment from './components/Fragment';

// 13 - children container
import Container from './components/Container'

// 14 - função em prop
import ExecuteFunction from './components/ExecuteFunction'

// 15 - state lift
import { useState } from 'react';
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {

  // 14 - função em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }
  
  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMensagem = (msg) => {
    setMessage(msg);
  }

  return (
    <div className='App' style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public  */}
      <img src="/img1.jpg" alt="Alguma imagem" />

      {/* 2 - imagem em assets */}
      <img src={night} alt="" />

      {/* 3 - useState */}
      <Data />

      {/* 4 - renderização de lista */}
      <ListRender />

      {/* 7 - render condicional */}
      <ConditionalRender />

      {/* 8 - props */}
      {/* aqui to enviando um dado */}
      <ShowUserName name="gabriel"/>

      {/* 9 - desestruturando props */}
      {/* toda propriedade que nao for uma string se usa template expression "{}" */}
      <CarDetails brand="VW" km={999} color="Vermelho"/>

      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="FIAT" km={123444} color="Preto"/>
      <CarDetails brand="Mitsubish" km={320} color="Branco"/>

      {/* 11 - renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails brand={car.brand} km={car.km} color={car.color} key={car.id} />
      ))}

      {/* 12 - Fragment */}
      <Fragment />

      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>

      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>

      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* 15 - state lift */}

      {/* este tem a exibição */}
      <Message msg={message}/>
      
      {/* este tem a alteração */}
      <ChangeMessage handleMessage={handleMensagem}/>
    </div>
  )
}

export default App
