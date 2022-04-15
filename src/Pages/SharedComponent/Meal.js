import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
  const navigate = useNavigate();
  const { idMeal, strMealThumb, strMeal, strInstructions } = meal;
  return (
    <div className="card w-auto  bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={strMealThumb}
          onClick={() => navigate(`/meal-details/${idMeal}`)}
          alt={strMeal}
          className="rounded-xl cursor-pointer"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{strMeal}</h2>
        <p>{strInstructions.slice(0, 70)}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/meal-details/${idMeal}`)}
          >
            Order Now
          </button>
          <button
            onClick={() => navigate(`/add-to-cart`)}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
