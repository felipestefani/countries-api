import { createContext, useState, ReactNode } from "react";
import countries from "../../data/data.json";

interface MainContextType {
    isDarkMode: boolean
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    displayCountries: Array<any>
    setDisplayCountries: React.Dispatch<React.SetStateAction<any[]>>
    allCountries: Array<any>
}

export const MainContext = createContext<MainContextType | undefined>(undefined)
// export const MainContext = createContext({})

interface MainProviderProps {
    children: ReactNode
}

const MainProvider = ({children}: MainProviderProps) => {

    const [isDarkMode, setIsDarkMode] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [displayCountries, setDisplayCountries] = useState<Array<any>>(countries)

    const allCountries = countries

    return(
        <MainContext.Provider value={{  isDarkMode, setIsDarkMode, 
                                        searchValue, setSearchValue,
                                        displayCountries, setDisplayCountries,
                                        allCountries,
                                    }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider