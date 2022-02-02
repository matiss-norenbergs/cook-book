const RecipesList = (props) => {
    const recipes = props.recipes;

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="recipe" key={recipe.id}>
                    <h2>{ recipe.title }</h2>
                    <span>{ recipe.cookingTime }</span>
                    <p>{ recipe.method }</p>
                </div>
            ))}
        </div>
    );
}
 
export default RecipesList;