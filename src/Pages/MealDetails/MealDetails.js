import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../SharedComponent/Spinner';

const MealDetails = () => {
  const params = useParams();
  const [meals, setMeals] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    fetch(
      'https://raw.githubusercontent.com/SyedMonir/red-onion/main/public/meals.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setSpinner(false);
      });
  }, []);
  const meal = meals.find((meal) => meal.idMeal === params.mealId);
  // console.log(params, meal);
  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <div className="card w-11/12 p-8 mx-auto my-12 lg:card-side bg-base-300 shadow-xl">
          <div className="card-body p-0 sm:p-8 sm:w-3/5 w-full">
            <h2 className="card-title text-5xl uppercase">{meal?.strMeal}</h2>
            <h2 className="text-4xl">
              <small>Price:</small> ${meal?.price}
            </h2>
            <p className="text-sm text-justify">{meal?.strInstructions}</p>
            <div className="card-actions justify-end">
              <Link to={'/add-to-cart'}>
                <button className="btn btn-primary px-10 ">Add to cart</button>
              </Link>
              <Link to={'/checkout'}>
                <button className="btn btn-error px-10 ">Order Now</button>
              </Link>
            </div>
          </div>
          <figure className="sm:w-2/5 w-full">
            <img src={meal?.strMealThumb} alt="Album" />
          </figure>
        </div>
      )}
    </>
  );
};

export default MealDetails;
