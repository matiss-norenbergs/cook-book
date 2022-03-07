import './NavBar.css';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import { signInWithGoogle } from '../../firebase/firebase';
import GoogleButton from 'react-google-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    let isLogged = false;

    if(user){
        isLogged = true;
    };

    const logOut = () => {
        localStorage.removeItem("loggedUser");
        window.location.reload(false);
    };

    const create = () => {
        return (
            <>
                <Link className='createBtn' to='/create'>create recipe</Link>
                <Link className='createBtn phoneIcon' to='/create'><FontAwesomeIcon icon={faPlus} /></Link>
                <button className='user' onClick={logOut}><img src={user.emailPic} alt='' /></button>
            </>
        )
    };

    const login = () => {
        return (
            <GoogleButton className='loginBtn' onClick={signInWithGoogle} />
        )
    };

    return(
        <nav>
            <Link className='logo' to='/'>Cook Book</Link>

            <div className='section'>
                <SearchBar />
                <Link className='createBtn phoneIcon' to='/'><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
                { isLogged ? create() : login() }
            </div>
        </nav>
    )
}

export default NavBar