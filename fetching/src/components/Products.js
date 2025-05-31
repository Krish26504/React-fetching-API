import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

function Products({ id, title, description, image, price }) {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="product-image" />
      </Link>
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
      <div className="product-price">₹{price}</div>
      <div className="product-actions">
        <Link to={`/products/${id}`}>
          <button className="add-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}
export default Products;
