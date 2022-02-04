import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import './Recipe.css';

const Recipe = () => {
    const { id } = useParams();
    const { data: recipe, error, isPending } = useFetch('http://localhost:3000/recipes/' + id);
    

    return(
        <div className="recipe">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { recipe && (
                <article className="recipeInfo">
                    <h1>{ recipe.title }</h1>
                    <p className="cookTime">
                        Takes { recipe.cookingTime } to cook.
                        <span>
                            {recipe.ingredients.map(ingredient => ingredient+", ")}
                        </span>
                    </p>

                    <p className="cookMethod">{ recipe.method }</p>
                </article>
            )}
        </div>
    );
}

export default Recipe;