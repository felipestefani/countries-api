import style from "./style.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Filter = () => {
    return(
        <div className={style.filter_container}>
            <select name="" id="" className={style.filter_select}>
                <option value=''>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <MdKeyboardArrowDown size={'2em'}/>
        </div>
    )
}

export default Filter