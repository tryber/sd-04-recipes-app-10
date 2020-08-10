import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderDrinks from '../components/HeaderDrinks';
import Footer from '../components/Footer';
import { getDrinksIngredients } from '../services/api';
import useDrinks from '../hooks/useDrinks';

const ExploreIngredientsDrinks = () => {
  const [ingredients, setIngredients] = useState([]);
  const [[, getDrinks], [, turnOffFilter]] = useDrinks();
  const history = useHistory();

  useEffect(() => {
    getDrinksIngredients().then((result) => setIngredients(result.drinks));
  }, []);

  const handleRedirect = (filter) => {
    getDrinks(filter, () => {});
    turnOffFilter();
    history.push('/bebidas');
  };

  return (
    <React.Fragment>
      <HeaderDrinks title="Explorar Ingredientes" />
      <div className="row mb-5 mt-5 pt-3">
        {ingredients.slice(0, 12).map((ingredient, index) => (
          <div
            data-testid={`${index}-ingredient-card`}
            className="col-6 mb-3"
            key={ingredient.strIngredient1}
            onClick={() => {
              handleRedirect({ text: ingredient.strIngredient1, searchBy: 'ingredient' });
            }}
          >
            <div className="card shadow-sm bg-white rounded">
              <img
                data-testid={`${index}-card-img`}
                className="card-img-top"
                src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png`}
                alt={`ingredient-${ingredient.strIngredient1}`}
              />
              <div className="card-body">
                <h5 className="card-title mb-0" data-testid={`${index}-card-name`}>
                  {ingredient.strIngredient1}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ExploreIngredientsDrinks;
