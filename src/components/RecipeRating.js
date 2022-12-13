import React, { useState } from 'react';

const RecipeRating = ({ dish }) => {
  const [rating, setRating] = useState(0);

  // store ratings in an array
  const ratings = [];

  return (
    <div>
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>Rating: {rating}</p>
      <button onClick={() => setRating(rating + 1)}>+</button>
      <button onClick={() => setRating(rating - 1)}>-</button>
      <button onClick={() => ratings.push(rating)}>Submit Rating</button>
    </div>
  );
}

export default RecipeRating;