import { useParams, useNavigate } from "react-router-dom";

function ProductDetail({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data && data[id];

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="detail-card">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      <img src={product.image} alt={product.title} className="detail-image" />
      <h2 className="detail-title">{product.title}</h2>
      <p className="detail-desc">{product.description}</p>
      <div className="detail-price">Price: ₹{product.price}</div>
    </div>
  );
}
export default ProductDetail;
