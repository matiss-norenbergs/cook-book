import './RecipesList.css';
import { Link } from 'react-router-dom';

const RecipeList = (props) => {
    const recipes = props.recipes;

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="recipe" key={recipe.id}>
                    <h2>{ recipe.title }</h2>
                    <span>{ recipe.cookingTime } to make.</span>
                    <p>{ recipe.method }</p>
                    <div>
                        <Link className='recipeBtn' to='/recipe/recipe.id'>Cook this</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default RecipeList;