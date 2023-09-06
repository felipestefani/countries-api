import { useContext, useEffect } from "react";
import style from "./style.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MainContext } from "../../contexts/MainContext";

const Filter = () => {

    // const [regions, setRegions] = useState([])
    const contextData = useContext(MainContext)
    if(!contextData) return null
    const { isDarkMode, setDisplayCountries, allCountries, filterValue, setFilterValue, setSearchValue } = contextData

    const filter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.target.value)
        setSearchValue('')
    }

    const regions = [... new Set(allCountries.map( country => country.region))]
    
    useEffect( () => {
        let newDisplay = allCountries.filter( countries => countries.region.toUpperCase() == filterValue.toUpperCase())
        newDisplay.length === 0 ? newDisplay = allCountries : ''
        setDisplayCountries(newDisplay)
    }, [filterValue])

    return(
        <div className={`${style.filter_container} ${isDarkMode ? 'card_dark_mode' : ''}`}>
            <select name="" id="" className={`${style.filter_select} ${isDarkMode ? style.filter_select_dark_mode : ''}`} onChange={ e => filter(e)}>
                <option value='' className={style.filter_select}>Filter by Region </option>
                {
                    regions.map( region => <option className={style.filter_select} key={region} value={region}>{region}</option>)
                }
            </select>
            <MdKeyboardArrowDown size={'2em'}/>
        </div>
    )
}

export default Filter