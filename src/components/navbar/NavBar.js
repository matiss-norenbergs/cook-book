import './NavBar.css';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';

const NavBar = () => {

    return(
        <nav>
            <Link className='logo' to='/'>Cook Book</Link>

            <div className='section'>
                <SearchBar />
                <Link className='createBtn' to='/create'>create recipe</Link>
            </div>
        </nav>
    )
}

export default NavBar