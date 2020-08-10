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
<<<<<<< HEAD
      <div className="row justify-content-center align-items-center">
        <div className="col-12 mt-5 pt-5">
          <Link to="/explorar/comidas/ingredientes">
            <button
              data-testid="explore-by-ingredient"
              className="btn btn-secondary btn-block btn-lg mb-4"
              type="button"
            >
              Por Ingredientes
            </button>
          </Link>
          <Link to="/explorar/comidas/area">
            <button
              data-testid="explore-by-area"
              className="btn btn-secondary btn-block btn-lg mb-4"
              type="button"
            >
              Por Local de Origem
            </button>
=======
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
>>>>>>> 194e7f17d5835250d117b69ede28fc1868cb1c13
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
