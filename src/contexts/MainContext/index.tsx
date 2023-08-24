import { createContext, useState, ReactNode } from "react";

interface MainContextType {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
}

export const MainContext = createContext<MainContextType | undefined>(undefined)
// export const MainContext = createContext({})

interface MainProviderProps {
    children: ReactNode
}

const MainProvider = ({children}: MainProviderProps) => {

    const [isDarkMode, setIsDarkMode] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    return(
        <MainContext.Provider value={{ isDarkMode, setIsDarkMode, searchValue, setSearchValue }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider