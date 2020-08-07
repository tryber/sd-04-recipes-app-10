import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMealsRandom } from '../services/api';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';

export default function ExploreMeals() {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getMealsRandom().then((result) => {
      setRecipe(result.meal.meals[0]);
    });
  }, []);

  return (
    <React.Fragment>
      <HeaderMeals title="Explorar Comidas" />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 mt-5 pt-5">
          <Link to="/explorar/comidas/ingredientes">
            <button
              data-testid="explore-by-ingredient"
              className="btn btn-secondary btn-block btn-lg"
              type="button"
            >
              Por Ingredientes
            </button>
          </Link>
          <Link to="/explorar/comidas/areas">
            <button
              data-testid="explore-by-area"
              className="btn btn-secondary btn-block btn-lg"
              type="button"
            >
              Por Local de Origem
            </button>
          </Link>
          <Link to={`/comidas/${recipe.idMeal}`}>
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
