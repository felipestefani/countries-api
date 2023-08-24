import { createContext, useState, ReactNode } from "react";

interface MainContextType {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const MainContext = createContext<MainContextType | undefined>(undefined)
// export const MainContext = createContext({})

interface MainProviderProps {
    children: ReactNode
}

const MainProvider = ({children}: MainProviderProps) => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    return(
        <MainContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider