import { createContext, useState, ReactNode } from "react";

export const MainContext = createContext({})

interface MainProviderProps {
    children: ReactNode
}

const MainProvider = ({children}: MainProviderProps) => {

    const [country, setCountry] = useState('')

    return(
        <MainContext.Provider value={{ country, setCountry }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider