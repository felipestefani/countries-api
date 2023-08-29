import style from "./style.module.css";
import Card from "../../components/Card";
import Filter from "../../components/Filter";
import SearchInput from "../../components/SerachInput";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

const Home = () => {

    const contextData = useContext(MainContext)
    if(!contextData) return null
    const { displayCountries } = contextData

    return(
        <div className={style.home_container}>
            <div className={style.filters}>
                <SearchInput />
                <Filter />
            </div>
            
            <ul className={style.country_list}>
            {
                displayCountries.map( country => (
                    <li key={country.name} >
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