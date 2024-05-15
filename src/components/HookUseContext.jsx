import { createContext, useState } from "react";

export const SomeContext = createContext();

export const SomeContextProvider = ({ children }) => {
    const [oi, setOi] = useState("oi");

    return(
        <SomeContext.Provider value={{ oi, setOi }}>
            {children}
        </SomeContext.Provider>
    )
}