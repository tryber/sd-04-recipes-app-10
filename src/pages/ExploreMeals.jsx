import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getMealsRandom } from '../services/api';

import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';

const ExploreMeals = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getMealsRandom().then((result) => {
      setRecipe(result.meals[0]);
    });
  }, []);

  return (
    <React.Fragment>
      <HeaderMeals title="Explorar Comidas" />
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col">
          <Link
            to="/explorar/comidas/ingredientes"
            data-testid="explore-by-ingredient"
            className="btn btn-secondary btn-block btn-lg"
          >
            Por Ingredientes
          </Link>
          <Link
            to="/explorar/comidas/area"
            data-testid="explore-by-area"
            className="btn btn-secondary btn-block btn-lg"
          >
            Por Local de Origem
          </Link>
          <Link
            to={`/comidas/${recipe.idMeal}`}
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

export default ExploreMeals;
