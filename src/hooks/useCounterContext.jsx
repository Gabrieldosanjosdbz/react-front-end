import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {

    // to guardando meu context em uma variavel
    const context = useContext(CounterContext);

    if (!context) {
        console.log("Contexto não encontrado")
        return;
    }

    console.log(context)

    return context
}