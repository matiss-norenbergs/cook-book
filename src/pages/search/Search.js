import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/recipesList/RecipesList';
import './Search.css';

const Search = () => {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes');

    //const fiter = recipes.filter(recipes.title.includes('veggie'));

    

    return(
        <div className="search">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { recipes && <RecipeList recipes={recipes} /> }
        </div>
    )
}

export default Search;