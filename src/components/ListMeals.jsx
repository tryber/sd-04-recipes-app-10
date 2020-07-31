import React from 'react';
import useMeals from '../hooks/useMeats';

const ListMeals = () => {
  const [meals] = useMeals();
  return (
    <div className="row">
      {meals.slice(0, 12).map((meal) => {
        const { strMeal, strMealThumb } = meal;
        return (
          <div className="col-6 mb-4">
            <div className="card">
              <img src={strMealThumb} className="card-img-top" alt={strMeal} />
              <div className="card-body">
                <h5 className="card-title mb-0">{strMeal}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListMeals;
