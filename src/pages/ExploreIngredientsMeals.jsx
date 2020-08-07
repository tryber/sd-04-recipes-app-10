import React, { useState, useEffect } from 'react';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';
import { getMealsIngredients } from '../services/api';

export default function ExploreIngredientsMeals() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getMealsIngredients().then((result) => setIngredients(result.meals.meals));
  }, []);

  return (
    <React.Fragment>
      <HeaderMeals title="Explorar Ingredientes" />
      <div className="row mt-5 pt-3">
        {ingredients.slice(0, 12).map((ingredient, index) => (
          <div
            data-testid={`${index}-ingredient-card`}
            className="col-6 mb-3"
            key={ingredient.idIngredient}
          >
            <div className="card shadow-sm bg-white rounded">
              <img
                data-testid={`${index}-card-img`}
                className="card-img-top"
                src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
              />
              <div className="card-body">
                <h5 className="card-title mb-0" data-testid={`${index}-card-name`}>{ingredient.strIngredient}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </React.Fragment>
  );
}
