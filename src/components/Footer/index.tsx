import style from "./style.module.css";
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer>
            Coded by <Link to={'https://www.linkedin.com/in/felipe-stefani-a35185116/'} target="_blank" className={style.me}>Felipe Stefani</Link>
        </footer>
    )
}

export default Footer