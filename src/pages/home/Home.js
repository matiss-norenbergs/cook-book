import useFetch from '../../hooks/useFetch'
import RecipesList from '../../components/recipesList/RecipesList';
import './Home.css'

const Home = () => {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes');
    
    return(
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { recipes && <RecipesList recipes={recipes} /> }
        </div>
    )
}

export default Home