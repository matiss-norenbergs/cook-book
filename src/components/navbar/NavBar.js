import './NavBar.css';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import { signInWithGoogle } from '../../firebase/firebase';
import GoogleButton from 'react-google-button';

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
                { isLogged ? create() : login() }
            </div>
        </nav>
    )
}

export default NavBar