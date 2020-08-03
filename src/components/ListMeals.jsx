import React from 'react';
import useMeals from '../hooks/useMeats';

const ListMeals = () => {
  const [meals] = useMeals();
  return (
    <div className="row">
      {meals.slice(0, 12).map(({ idMeal, strMeal, strMealThumb }, index) => (
        <div className="col-6 mb-3" key={idMeal}>
          <div className="card shadow-sm bg-white rounded">
            <img
              data-testid={`${index}-card-img`}
              src={strMealThumb}
              className="card-img-top"
              alt={strMeal}
            />
            <div className="card-body">
              <h5 className="card-title mb-0" data-testid={`${index}-card-name`}>
                {strMeal}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListMeals;
