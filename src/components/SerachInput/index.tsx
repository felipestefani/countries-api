import { useContext, useEffect } from "react";
import style from "./style.module.css";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MainContext } from "../../contexts/MainContext";

const SearchInput = () => {

    const contextData = useContext(MainContext)
    if(!contextData) return null
    const { searchValue, setSearchValue, setDisplayCountries, allCountries } = contextData

    // const filterCountry = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     setDisplayCountries(allCountries)
    //     const newDisplay: Array<any> = allCountries.filter( (country: any) => (country.name.toUpperCase() == searchValue.toUpperCase()))
    //     if(newDisplay) setDisplayCountries(newDisplay)
    //     setSearchValue('') 
    // }

    // const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchValue(e.target.value)
    // };

    useEffect(() => {
        const newDisplay: Array<any> = allCountries.filter( (country: any) => country.name.toUpperCase().includes(searchValue.toUpperCase()) )
        setDisplayCountries(newDisplay)
    }, [searchValue]);

    return(
        <div className={style.search_input_container}>
            <form className={style.search_form}>
            {/* <form onSubmit={filterCountry} className={style.search_form}> */}
                <div className={style.search_icon_container}>
                    <FiSearch className={style.search_icon} size={'1.5em'} />
                </div>
                <input type="text" className={style.search_input} value={searchValue} placeholder='Search for a country...' onChange={e => setSearchValue(e.target.value)}/>
                {/* <input type="text" className={style.search_input} value={searchValue} placeholder='Search for a country...' onChange={ e => setSearchValue(e.target.value) }/> */}
                <div hidden={searchValue.length > 0 ? false : true}>
                    <IoMdClose size={'1.5em'} onClick={() => setSearchValue('')}/>
                </div>
            </form>
        </div>
    )
}

export default SearchInput