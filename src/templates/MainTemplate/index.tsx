import style from "./style.module.css";
import { ReactNode, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MainContext } from "../../contexts/MainContext";

interface MainTemplateProps {
    children: ReactNode
}

const MainTemplate = ({children}: MainTemplateProps) => {

    const contextData = useContext(MainContext)
    if(!contextData) return null
    const { isDarkMode } = contextData

    return(
        <div className={`${style.template_container} ${isDarkMode ? 'dark_mode' : ''}`}>
            <Header />
                {children}
            <Footer />
        </div>
    )  
}

export default MainTemplate