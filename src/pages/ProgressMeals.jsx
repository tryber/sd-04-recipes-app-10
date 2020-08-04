import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import makeArray from '../utils/makeIngredientsArray';
import { getMealsById, getAllDrinks } from '../services/api';
// import getCodeYT from '../utils/getYoutubeId';
// import mock from '../services/mock';

// const meal = mock[0];

export default function ProgressMeals() {
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMealsById(id).then(({ meal: { meals } }) => {
      setMeal(meals[0]);
      setIngredients(makeArray(meals[0]));
    });
  }, [id]);

  return (
    <React.Fragment>
      <div className="row justify-content-center p-0">
        <div className="col-12 p-0">
          <img data-testid="recipe-photo" src={meal.strMealThumb} alt="foto" width="100%" />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <h3 data-testid="recipe-title">{meal.strMeal}</h3>
          <h5 data-testid="recipe-category" className="text-muted">
            {meal.strCategory}
          </h5>
        </div>
        <div>
          <img data-testid="share-btn" src={shareIcon} alt="share" />
          <img data-testid="favorite-btn" src={whiteHeartIcon} alt="share" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Ingredients</h4>
          <div className="bg-light">
            {ingredients.map((ingredient) => (
              <div className="form-check" key={ingredient}>
                <input type="checkbox" className="form-check-input" id={ingredient} />
                <label className="form-check-label" htmlFor={ingredient}>
                  {ingredient}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Instructions</h4>
          <p data-testid="instructions" className="bg-light">
            {meal.strInstructions}
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <button
          type="button"
          className="btn btn-block btn-success fixed-bottom"
          data-testid="start-recipe-btn"
        >
          Finalizar Receita
        </button>
      </div>
    </React.Fragment>
  );
}
