import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav>
            <h1>Cook Book</h1>

            <div className='section'>
                <form>
                    <label htmlFor="">Search: </label>
                    <input type="text" />
                </form>
                    <Link className='createBtn' to='/create'>create recipe</Link>
            </div>
        </nav>
    )
}

export default NavBar