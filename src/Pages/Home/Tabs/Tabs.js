import React, { useEffect, useState } from 'react';
import Meal from '../../SharedComponent/Meal';

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch('meals.json')
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  const breakfasts = meals.filter((meal) => meal.strCategory === 'Breakfast');
  const lunch = meals.filter((meal) => meal.strCategory === 'Lunch');
  const dinner = meals.filter((meal) => meal.strCategory === 'Dinner');
  //   console.log(breakfasts.length, lunch.length, dinner.length);

  if (breakfasts.length && lunch.length && dinner.length) {
    breakfasts.length = 6;
    lunch.length = 6;
    dinner.length = 6;
  }
  //   console.log(breakfasts.length, lunch.length, dinner.length);
  return (
    <>
      <section className="flex flex-wrap">
        <div className="w-11/12 mx-auto">
          <div className="w-auto sm:w-2/4 mx-auto my-5">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 1
                      ? 'text-white bg-red-700'
                      : 'text-black bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  breakfasts
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 2
                      ? 'text-white bg-red-700'
                      : 'text-black bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Lunch
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 3
                      ? 'text-white bg-red-700'
                      : 'text-black bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  dinner
                </a>
              </li>
            </ul>
          </div>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
                    {breakfasts.map((breakfast) => (
                      <Meal key={breakfast.idMeal} meal={breakfast}></Meal>
                    ))}
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
                    {lunch.map((lunch) => (
                      <Meal key={lunch.idMeal} meal={lunch}></Meal>
                    ))}
                  </div>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
                    {dinner.map((dinner) => (
                      <Meal key={dinner.idMeal} meal={dinner}></Meal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
