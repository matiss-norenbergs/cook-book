import './NavBar.css';
import SearchBar from '../searchBar/SearchBar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signInWithGoogle } from '../../firebase/firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                const name = user.displayName;
                const email = user.email;
                const picture = user.photoURL;
                const id = user.uid;
                const userInfo = { name, email, picture, id };
                dispatch(setUser(userInfo));
            }
        });
        
        return unsubscribe;
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            window.location.reload(false);
        }).catch((error) => {
            console.log(error);
        });
    };

    const [dropdown, setDropdown] = useState('none');

    const showDropdown = () => {
        if(dropdown === 'none'){
            setDropdown('block');
        }else{
            setDropdown('none'); 
        }
    };

    window.onclick = function(event){
        if (!event.target.matches('.userPicture')){
            if(dropdown === 'block'){
                setDropdown('none');
            }
        }
    }

    const create = () => {
        return (
            <>
                <Link className='createBtn' to='/create'>create recipe</Link>
                <Link className='createBtn phoneIcon' to='/create'><FontAwesomeIcon icon={faPlus} /></Link>
                <div className='dropdown'>
                    <button className='userBtn' onClick={showDropdown}><img className='userPicture' src={user.picture} alt="" /></button>
                    <div className='dropdown-content' id='userDropdown' style={{display: dropdown}}>
                        { user.name }<hr />
                        { user.email }<hr />
                        <button className='logoutBtn' onClick={logOut}><FontAwesomeIcon icon={faRightFromBracket} /> Log out</button>
                    </div>
                </div>
            </>
        )
    };

    const login = () => {
        return (
            <button className='loginBtn' onClick={signInWithGoogle}><FontAwesomeIcon icon={faGoogle} /> &nbsp; Sign in </button>
        )
    };

    return(
        <nav>
            <Link className='logo' to='/'>Cook Book</Link>

            <div className='section'>
                <SearchBar />
                <Link className='createBtn phoneIcon' to='/'><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
                { user ? create() : login() }
            </div>
        </nav>
    )
}

export default NavBar