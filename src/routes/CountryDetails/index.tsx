import style from "./style.module.css";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useContext, useEffect } from "react";
import { MainContext } from "../../contexts/MainContext";

const CountryDetails = () => {

    const contextData = useContext(MainContext)
    if(!contextData) return null
    const {allCountries, isDarkMode} = contextData
    
    const { country_name } = useParams()

    const displayCountryArray = allCountries.filter( country => country.name == country_name)
    const displayCountry = displayCountryArray[0]

    // const borderCountries = () => {
    //     if (displayCountry.borders) {
    //         const listAllCountries = displayCountry.borders.map( (country: string) => allCountries.filter( (coun: string) => coun.alpha3Code == country ) ) 
    //         const countriesName = listAllCountries.map( (country: string) => country[0].name)
    //         return countriesName
    //     }
    // }

    const borderCountries = () => {
        if (displayCountry.borders) {
            const countriesName = displayCountry.borders.map((countryCode: string) => {
                const country = allCountries.find((coun: { alpha3Code: string }) => coun.alpha3Code === countryCode);
                return country ? country.name : ''; // Return an empty string if not found
            });
            return countriesName;
        }
        // return []; // Return an empty array if there are no borders
    }

    const border = borderCountries()
    
    return(
        <div className={style.country_details_container}>
            <Link to={'/'} className={`${style.back_home} ${isDarkMode ? 'dark_mode_shadow' : ''}`}> <GoArrowLeft className={style.back_icon} size={'1.5em'}/>Back</Link>
            <div className={style.country_container}>
                <div className={style.home_flag_container}>
                    <img src={displayCountry.flag} alt="country flag" className={style.home_flag}/>
                </div>
                <div className={style.country_infos_container}>
                    <h1 className={style.country_info_title}>{displayCountry.name}</h1>
                    <div className={style.country_info_data}>
                        <div className={style.left_data}>
                            <p className={style.paragraph}>Native Name: <span className={style.paragraph_data} >{displayCountry.nativeName}</span></p>
                            <p className={style.paragraph}>Population: <span className={style.paragraph_data}>{displayCountry.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></p>
                            <p className={style.paragraph}>Region: <span className={style.paragraph_data}>{displayCountry.region}</span></p>
                            <p className={style.paragraph}>Sub Region: <span className={style.paragraph_data}>{displayCountry.subregion}</span></p>
                            <p className={style.paragraph}>Capital: <span className={style.paragraph_data}>{displayCountry.capital ? displayCountry.capital : '-'}</span></p>
                        </div>
                        <div className={style.right_data}>
                            <p className={style.paragraph}>Top Level Domain: <span className={style.paragraph_data}>{displayCountry.topLevelDomain}</span></p>
                            <p className={style.paragraph}>Currencies: <span className={style.paragraph_data}>{displayCountry.currencies ? displayCountry.currencies.map( (cur: any) => cur.name) : '-'} </span></p>
                            <p className={style.paragraph}>Languages: <span className={style.paragraph_data_lan}>{displayCountry.languages ? displayCountry.languages.map( (lan: any) => `${lan.name}, `) : ''}</span></p>
                        </div>
                    </div>
                    <div className={style.border_countries}>
                       <ul className={style.list_border_countries}>
                            <p className={style.border_countries_title}>Border Countries: </p>
                            <div className={style.list}>
                                {
                                    border ? border.map( (c: string) => (
                                        <Link to={`/${c}/details`} className={style.link}><li className={`${style.border_country_item} ${isDarkMode ? 'dark_mode_shadow' : ''}`}>{c}</li></Link>
                                    )) : ' - '
                                }
                            </div>
                       </ul>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default CountryDetails