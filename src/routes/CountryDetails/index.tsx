import style from "./style.module.css";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

const CountryDetails = () => {

    const contextData = useContext(MainContext)
    if(!contextData) return null
    const {allCountries} = contextData
    
    const { country_name } = useParams()

    const displayCountry = allCountries.filter( country => country.name == country_name)
    
    return(
        <div className={style.country_details_container}>
            <Link to={'/'} className={style.back_home}> <GoArrowLeft className={style.back_icon} size={'1.5em'}/>Voltar</Link>
            <div className={style.country_container}>
               <img src={displayCountry[0].flag} alt="country flag" className={style.home_flag}/>
            </div>
        </div>
    )
}

export default CountryDetails