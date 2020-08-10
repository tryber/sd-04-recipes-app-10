import React from 'react';
import { Link } from 'react-router-dom';
import useDrinks from '../hooks/useDrinks';

const ListDrinks = () => {
  const [[drinks]] = useDrinks();
  return (
    <div className="row">
      {drinks &&
        drinks.slice(0, 12).map((drink, index) => {
          const { idDrink, strDrink, strDrinkThumb } = drink;
          return (
            <div className="col-6 mb-3" key={idDrink}>
              <Link to={`/bebidas/${idDrink}`}>
                <div
                  data-testid={`${index}-recipe-card`}
                  className="card shadow-sm bg-white rounded"
                >
                  <img
                    data-testid={`${index}-card-img`}
                    src={strDrinkThumb}
                    className="card-img-top"
                    alt={strDrink}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title mb-1"
                      data-testid={`${index}-card-name`}
                    >
                      {strDrink}
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

export default ListDrinks;
