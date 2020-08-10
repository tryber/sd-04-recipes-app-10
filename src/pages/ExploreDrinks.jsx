import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getDrinksRandom } from '../services/api';

import HeaderDrinks from '../components/HeaderMeals';
import Footer from '../components/Footer';

const ExploreDrinks = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getDrinksRandom().then((result) => {
      setRecipe(result.drinks[0]);
    });
  }, []);

  return (
    <React.Fragment>
      <HeaderDrinks title="Explorar Bebidas" />
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col">
          <Link
            to="/explorar/bebidas/ingredientes"
            data-testid="explore-by-ingredient"
            className="btn btn-secondary btn-block btn-lg"
          >
            Por Ingredientes
          </Link>
          <Link
            to={`/bebidas/${recipe.idDrink}`}
            data-testid="explore-surprise"
            className="btn btn-secondary btn-block btn-lg"
          >
            Me Surpreenda!
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ExploreDrinks;
