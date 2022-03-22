import './Recipe.css';
import useFetch from '../../hooks/useFetch';
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Recipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: recipe, error, isPending } = useFetch("recipes", id);
    const user = useSelector(state => state.user.user);
    const [showRecipeCard, setShowRecipeCard] = useState(true);

    const deleteRecipe = () => {
        setShowRecipeCard(false);
        setTimeout( async () => {
            await deleteDoc(doc(db, "recipes", id));
            navigate("/");
        }, 1400);
    }

    const isAuthor = () => {
        return (
            <div className="btnHolder">
                <button className="deleteBtn" onClick={() => deleteRecipe()}><FontAwesomeIcon icon={faTrashCan} /> Delete</button>
            </div>
        )
    }

    const showRecipe = () => {
        return (
            <>
                { error && <div className='stateInfo'>{ error }</div> }
                { isPending && <div className='stateInfo'>Loading...</div> }
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
                        <p className="madeBy">Added by <span className="author">{ recipe.authorName }</span></p>

                        { user && recipe.authorID === user.id ? isAuthor() : '' }
                    </article>
                )}
            </>
        )
    }

    const deletedRecipe = () => {
        return (
            <div className="recipeInfo">
                <h1>Recipe deleted</h1>
                <div className="faCheck">
                    <FontAwesomeIcon icon={faCheck} />
                </div>
            </div>
        )
    }

    return(
        <div className="recipe">
            { showRecipeCard === true ? showRecipe() : deletedRecipe() }
        </div>
    );
}

export default Recipe;