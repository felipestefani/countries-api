import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MainContext } from "../../contexts/MainContext";

const Filter = () => {

    // const [regions, setRegions] = useState([])

    const contextData = useContext(MainContext)
    if(!contextData) return null
    const { setDisplayCountries, allCountries, filterValue, setFilterValue } = contextData

    const filter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.target.value)
    }

    const regions = [... new Set(allCountries.map( country => country.region))]
    console.log(regions);
    
    useEffect( () => {
        let newDisplay = allCountries.filter( countries => countries.region.toUpperCase() == filterValue.toUpperCase())
        newDisplay.length === 0 ? newDisplay = allCountries : ''
        setDisplayCountries(newDisplay)
    }, [filterValue])

    return(
        <div className={style.filter_container}>
            <select name="" id="" className={style.filter_select} onChange={ e => filter(e)}>
                <option value=''>Filter by Region</option>
                {
                    regions.map( region => (
                        <option key={region} value={region}>{region}</option>
                    ))
                }
            </select>
            <MdKeyboardArrowDown size={'2em'}/>
        </div>
    )
}

export default Filter