import style from "./style.module.css";
import Card from "../../components/Card";
import country_data from "../../data/data.json";

const Home = () => {

    return(
        <div className={style.home_container}>
            <ul className={style.country_list}>
            {
                country_data.map( country => (
                    <li key={country.cioc} >
                        <Card 
                        name={country.name} 
                        population={country.population} 
                        region={country.region} 
                        capital={country.capital}
                        flag={country.flag}
                    />
                    </li>

                ))    
            }
            </ul>

        </div>
    )
}

export default Home