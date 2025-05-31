import ShowMoreText from "react-show-more-text";

function Recipies({ id, title, description, image, ingredients }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <ShowMoreText
        lines={3}
        more="Show more"
        less="Show less"
        className="product-desc"
        anchorClass="show-more-link"
        expanded={false}
        width={0}
      >
        {description}
      </ShowMoreText>
      <ul className="recipe-ingredients">
        {ingredients && ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
      </ul>
      <div className="product-actions">
        <button className="add-btn">View Recipe</button>
      </div>
    </div>
  );
}
export default Recipies;
