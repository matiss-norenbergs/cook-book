import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'

const Create = () => {
    const [title, setTitle] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [method, setMethod] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();
    let keyId = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title !== '' && ingredients.length !== 0 && method !== '' && time !== '' && !isNaN(time)){
            let cookingTime = time + " minutes"
            const recipe = { title, ingredients, method, cookingTime };

            fetch('http://localhost:3000/recipes', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(recipe)
            }).then(() => {
                // console.log("New recipe added!");
            })

            setTimeout(function() {
                navigate("/");
            }, 200);
        }else{
            // console.log("You've missed a field!");
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
                        <button onClick={handleAdd}>add</button>
                    </div>
                    <span>
                        Current ingredients:&nbsp;
                        {ingredients.map(e =>
                            <strong key={keyId++}> 
                                {e}
                                <button name={e} onClick={removeIngredient}>×</button> 
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
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Create;