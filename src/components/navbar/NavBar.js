import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const NavBar = () => {
    const [searchVal, setSearchVal] = useState('');
    const initialRender = useRef(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(initialRender.current){
            initialRender.current = false;
        }else{
            navigate("/search", {state: searchVal});
        }
    }, [searchVal]);

    return(
        <nav>
            <Link className='logo' to='/'>Cook Book</Link>

            <div className='section'>
                <form>
                    <label>Search: </label>
                    <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                </form>
                    <Link className='createBtn' to='/create'>create recipe</Link>
            </div>
        </nav>
    )
}

export default NavBar