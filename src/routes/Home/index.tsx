import { Link } from "react-router-dom";
const Home = () => {
    console.log('estou na home');
    
    return(
        <div>
            This is home page
            <Link to={'/country_name'}> Country </Link>
        </div>
    )
}

export default Home