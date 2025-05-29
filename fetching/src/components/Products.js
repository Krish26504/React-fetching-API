function Products({ title, body }) {
  return (
    <div className="product-card">
      <img
        src="https://via.placeholder.com/100"
        alt={title}
        className="product-image"
      />
      <h3 className="product-title">{title}</h3>
      <p className="product-desc">
        {body.length > 80 ? body.slice(0, 80) + " ... " : body}
        <span className="show-more">Show More</span>
      </p>
      <div className="product-price">₹99</div>
      <div className="product-actions">
        <button className="add-btn">Add to Cart</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
}
export default Products