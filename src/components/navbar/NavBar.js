import './NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <h1>Cook Book</h1>

            <div className='section'>
                <form>
                    <label htmlFor="">Search: </label>
                    <input type="text" />
                </form>
                    <button>create recipe</button>
            </div>
        </nav>
    )
}

export default NavBar