import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"

import { useContext } from "react"
import { SomeContext } from '../components/HookUseContext';
import HookUseRef from "../components/HookUseRef";
import HookuseCallback from "../components/HookuseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";

const Home = () => {
  const {oi, setOi} = useContext(SomeContext);

  return (
    <div>
      <h1>Home</h1>
      {/* 1 - HookUseState */}
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>UserContext</h2>
      <p>Valor do contexto: {oi}</p>
      <button onClick={() => setOi("oi, tudo bem?")}>Mudar o oi</button>
      <hr />
      <HookUseRef />
      <HookuseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect /> 
    </div>
  )
}

export default Home