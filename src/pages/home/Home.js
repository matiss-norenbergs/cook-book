import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/recipesList/RecipesList';
import './Home.css';

const Home = () => {
    const { data: recipes, isPending, error } = useFetch("recipes");
    
    return(
        <div className="home">
            { error && <div className='stateInfo'>{ error }</div> }
            { isPending && <div className='stateInfo'>Loading...</div> }
            { recipes && <RecipeList recipes={recipes} /> }
        </div>
    )
}

export default Home;