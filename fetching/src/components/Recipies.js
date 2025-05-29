function Recipies({ title, body, ingredients, image }) {
    return (
      <div className="recipe-card">
        <img
          src={image || "https://via.placeholder.com/150"}
          alt={title}
          className="recipe-image"
        />
        <h3 className="recipe-title">{title}</h3>
        <p className="recipe-desc">{body}</p>
        {ingredients && (
          <ul className="recipe-ingredients">
            {ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
          </ul>
        )}
        <button className="cook-btn">View Recipe</button>
      </div>
    );
  }
  export default Recipies;
  