import React from 'react';
import useDrinks from '../hooks/useDrinks';

const ListDrinks = () => {
  const [drinks] = useDrinks();
  return (
    <div className="row">
      {drinks.slice(0, 12).map((drink, index) => {
        const { idDrink, strDrink, strDrinkThumb } = drink;
        return (
          <div className="col-6 mb-3" key={idDrink}>
            <div className="card">
              <img
                data-testid={`${index}-card-img`}
                src={strDrinkThumb}
                className="card-img-top"
                alt={strDrink}
              />
              <div className="card-body">
                <h5 className="card-title mb-1" data-testid={`${index}-card-name`}>
                  {strDrink}
                </h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListDrinks;
