import { createContext, useReducer } from "react";

// Cria um novo contexto para gerenciar a cor do título
export const TitleColorContext = createContext();

// Define o reducer para atualizar a cor do título
export const titleColorReducer = (state, action) => {
    switch(action.type) {
        case "RED": 
            // Se a ação for 'RED', atualiza a cor para vermelho
            return {...state, color: "red"};
        case "BLUE":
            // Se a ação for 'BLUE', atualiza a cor para azul
            return {...state, color: "blue"};
        default:
            // Se a ação não for reconhecida, retorna o estado atual
            return state;
    }
}

// Provedor do contexto que envolve os componentes filhos
export const TitleColorContextProvider = ({ children }) => {
    // Cria um estado gerenciado pelo reducer para a cor do título, inicialmente roxo
    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"});

    // Retorna o provedor do contexto com o valor do estado atual e a função dispatch
    return (
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    );
}
