import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/recipesList/RecipesList';
import './Search.css';
import { useLocation } from 'react-router-dom';

const Search = (props) => {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes');
    const { state } = useLocation();

    function search(rows){
        return rows.filter((row) => row.title.toLowerCase().indexOf(state !== null ? state : '') > -1);
    }

    return(
        <div className="search">
            <h1>Recipes icluding {state}...</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Searching...</div> }
            { recipes && <RecipeList recipes={search(recipes)} /> }
        </div>
    )
}

export default Search;