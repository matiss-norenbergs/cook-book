import './RecipesList.css';
import { Link } from 'react-router-dom';

const RecipeList = (props) => {
    const recipes = props.recipes;

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <Link to={'/recipe/' + recipe.id}  key={recipe.id}>
                    <div className="recipe">
                        <h2>{ recipe.title }</h2>
                        <span>{ recipe.cookingTime } to make.</span>
                        <p>{ recipe.method }</p>
                        <p className='madeBy'>By <span className='author'>{ recipe.madeBy }</span></p>
                        <div className='btnHolder'>
                            <button className='recipeBtn'>Cook this</button>
                        </div>
                        
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default RecipeList;