import style from "./style.module.css";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const CountryDetails = () => {

    return(
        <div className={style.country_details_container}>
            <Link to={'/'} className={style.back_home}> <GoArrowLeft className={style.back_icon} size={'1.5em'}/>Voltar</Link>
        </div>
    )
}

export default CountryDetails