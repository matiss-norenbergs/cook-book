import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/recipesList/RecipesList';
import { useLocation } from 'react-router-dom';
import './Search.css';

const Search = () => {
    const { data: recipes, isPending, error } = useFetch("recipes");
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const q = query.get('q');

    function searchFilter(rows){
        return rows.filter((row) => row.title.toLowerCase().indexOf(q !== null ? q : '') > -1);
    }

    return(
        <div className="search">
            <h1>Recipes including {q !== '' ? q : '...'}</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Searching...</div> }
            { recipes && <RecipeList recipes={searchFilter(recipes)} /> }
        </div>
    )
}

export default Search;