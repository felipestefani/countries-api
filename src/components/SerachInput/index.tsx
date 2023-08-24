import { useContext } from "react";
import style from "./style.module.css";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MainContext } from "../../contexts/MainContext";

const SearchInput = () => {

    const contextData = useContext(MainContext)
    if(!contextData) return null
    const { searchValue, setSearchValue } = contextData

    return(
        <div className={style.search_input_container}>
            <div className={style.search_icon_container}>
                <FiSearch className={style.search_icon} size={'1.5em'} />
            </div>
            <input type="text" className={style.search_input} value={searchValue} placeholder='Search for a country...' onChange={ e => setSearchValue(e.target.value) }/>
            <div hidden={searchValue.length > 0 ? false : true}>
                <IoMdClose size={'1.5em'} onClick={() => setSearchValue('')}/>
            </div>
        </div>
    )
}

export default SearchInput