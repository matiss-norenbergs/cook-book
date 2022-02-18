import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
    const [searchVal, setSearchVal] = useState('');
    const initialRender = useRef(true);
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${searchVal}`);
    }

    useEffect(() => {
        if(initialRender.current){
            initialRender.current = false;
        }else{
            if(searchVal !== ''){
                navigate(`/search?q=${searchVal}`);
            }else{
                navigate("/");
            }
        }
    }, [searchVal]);

    return(
        <form className='searchBar' onSubmit={submit}>
            <label>Search: </label>
            <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
        </form>
    )
}

export default SearchBar;