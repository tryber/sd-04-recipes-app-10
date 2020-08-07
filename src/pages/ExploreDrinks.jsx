import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDrinksRandom } from '../services/api';
import HeaderDrinks from '../components/HeaderMeals';
import Footer from '../components/Footer';

export default function ExploreDrinks() {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getDrinksRandom().then((result) => {
      setRecipe(result.drink.drinks[0]);
    });
  }, []);

  return (
    <React.Fragment>
      <HeaderDrinks title="Explorar Bebidas" />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 mt-5 pt-5">
          <Link to="/">
            <button
              data-testid="explore-by-ingredient"
              className="btn btn-secondary btn-block btn-lg"
              type="button"
            >
            Por Ingredientes
            </button>
          </Link>
          <Link to={`/bebidas/${recipe.idDrink}`}>
            <button
              data-testid="explore-surprise"
              className="btn btn-secondary btn-block btn-lg"
              type="button"
            >
            Me Surpreenda!
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

