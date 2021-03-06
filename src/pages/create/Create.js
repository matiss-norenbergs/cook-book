import './Create.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';

const Create = () => {
    const [title, setTitle] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [method, setMethod] = useState('');
    const [time, setTime] = useState('');
    const [warning, setWarning] = useState('');
    const user = useSelector(state => state.user.user);
    let keyId = 0;

    const navigate = useNavigate();

    const recipesCollection = collection(db, "recipes");
    const createRecipe = async (cookingTime) => {
        let timeStamp = new Date();
        timeStamp = dateFormat(timeStamp, "dd/mm/yyyy, HH:MM:ss");

        const authorName = user.name;
        const authorID = user.id;

        await addDoc(recipesCollection, { title, ingredients, method, cookingTime, timeStamp, authorName, authorID });
        navigate("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title !== '' && ingredients.length !== 0 && method !== '' && time !== '' && !isNaN(time) && user){
            let cookingTime = time + " minutes";
            createRecipe(cookingTime);
        }else{
            setWarning('Empty field! Don\'t forget to add an ingredient!');
        }
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if(ingredient !== ''){
            setIngredients(arr => [...arr, ingredient]);
            setIngredient('');
        }
    }

    const removeIngredient = (e) => {
        e.preventDefault();
        let name = e.target.getAttribute("name");
        setIngredients(ingredients.filter((e) => (e !== name)))
    }

    return(
        <div className="create">
            <h1>Add a new recipe</h1>
            <form className='newRecipe' onSubmit={handleSubmit}>
                <div className="row">
                    <label>Recipe title:</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="row">
                    <label>Recipe ingredients:</label>
                    <div className="inline">
                        <input type="text" value={ingredient} onChange={(e) => setIngredient(e.target.value)} />
                        <button className='addItem' onClick={handleAdd}>add</button>
                    </div>
                    <span>
                        Current ingredients:&nbsp;
                        {ingredients.map(e =>
                            <strong key={keyId++}> 
                                {e}
                                <button className='removeItem' name={e} onClick={removeIngredient}>??</button> 
                            </strong>
                        )}
                    </span>
                </div>
                <div className="row">
                    <label>Recipe method:</label>
                    <textarea name="method" required value={method} onChange={(e) => setMethod(e.target.value)}></textarea>
                </div>
                <div className="row">
                    <label>Cooking time (in minutes):</label>
                    <input type="number" required value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="warning">{ warning }</div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Create;