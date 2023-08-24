import style from "./style.module.css";
import { Link } from "react-router-dom";

interface CardProps {
    name: string,
    population: number,
    region: string,
    capital?: string,
    flag?: string
}

const Card: React.FC<CardProps> = props => {

    const { name, population, region, capital, flag } = props

    return(
        <div className={style.card_container}>
            <div className={style.country_container}>
                <Link to={`/${name}/details`}><img src={flag} alt="country flag" className={style.home_flag}/></Link>
            </div>
            <div className={style.country_info_container}>
                <h1 className={style.country_name}>{name}</h1>
                <div className={style.info_container}>
                    <div className={style.population_info}>
                        <h2 className={style.population_title}>Population:</h2>
                        <p className={style.population_text}>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                    </div>
                    <div className={style.region_info}>
                        <h2 className={style.region_title}>Region:</h2>
                        <p className={style.region_text}>{region}</p>
                    </div>
                    <div className={style.capital_info}>
                        <h2 className={style.capital_title}>Capital:</h2>
                        <p className={style.capital_text}>{capital}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card