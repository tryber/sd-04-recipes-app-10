import React from 'react';
import { Link } from 'react-router-dom';
import useMeals from '../hooks/useMeats';

const ListMeals = () => {
  const [[{ meals }]] = useMeals();
  return (
    <div className="row">
      {meals &&
        meals.slice(0, 12).map((meal, index) => {
          const { idMeal, strMeal, strMealThumb } = meal;
          return (
            <div className="col-6 mb-3" key={idMeal}>
              <Link to={`/comidas/${idMeal}`}>
                <div
                  data-testid={`${index}-recipe-card`}
                  className="card shadow-sm bg-white rounded"
                >
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
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ListMeals;
