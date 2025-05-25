import React from 'react'

const Recipies = (props) => {
  return (
    <div className = "Recipies">
   <h3>{props.title}</h3>
   <p>{props.body}</p>
</div>

  );
}

export default Recipies