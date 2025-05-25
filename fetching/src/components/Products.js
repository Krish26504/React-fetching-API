import React from 'react'

const Products = (props) => {
  return (
    <div className = "Products">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
    
  );
}

export default Products