import { useContext } from "react";
import style from "./style.module.css";
import { HiOutlineMoon } from "react-icons/hi";
import { MainContext } from "../../contexts/MainContext";

const Header = () => {

    const contextData = useContext(MainContext)
    if(!contextData) return null
    const { isDarkMode, setIsDarkMode } = contextData

    return (
        <>
            <header className={`${style.header_container} ${isDarkMode ? style.dark_mode : ''}`}>
                <div className={style.logo_container}>
                    <p className={style.logo}>Where in the world?</p>
                </div>
                <div className={style.dark_mode_container} onClick={() => setIsDarkMode(!isDarkMode)}>
                    <HiOutlineMoon className={style.moon_icon} fill={ isDarkMode ? 'white' : 'transparent'}/>

                    <span className={style.dark_mode_text}>Dark mode</span>
                </div>
            </header>
            </>
    )
}

export default Header