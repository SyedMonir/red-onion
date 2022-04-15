import React from 'react';

const Meal = ({ meal }) => {
  const { strMealThumb, strMeal, strInstructions } = meal;
  return (
    <div className="card w-auto  bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{strMeal}</h2>
        <p>{strInstructions.slice(0, 70)}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Order Now</button>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
