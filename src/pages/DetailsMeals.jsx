import React, { useEffect, useState } from 'react';
import { mock } from '../services/mock';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const makeArray = () => {
  const ingredientsMeals = [];
  for (let i = 1; i <= 20; i += 1) {
    let ingredients = mock[0][`strIngredient${i}`];
    let measure = mock[0][`strMeasure${i}`];
    const result = `${ingredients} - ${measure}`;
    if (ingredients.length) {
      ingredientsMeals.push(result);
    }
  }
  return ingredientsMeals;
};

const getCodeYT = (link) => {
  const code = link.slice(32);
  return code;
};

export default function DetailsMeals() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(makeArray());
  }, []);

  const meal = mock[0];
  return (
    <div>
      <div className="row justify-content-center p-0">
        <div className="col-12 p-0">
          <img src={meal.strMealThumb} alt="foto" width="100%" />
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
          <ul className="bg-light">
            {ingredients.map((ingredient, index) => (
              <li data-testid={`${index}-ingredient-name-and-measure`} key={ingredient + index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>instructions</h4>
          <p data-testid="instructions" className="bg-light">
            {meal.strInstructions}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Vídeo</h4>
          <iframe
            src={`https://www.youtube.com/embed/${getCodeYT(meal.strYoutube)}`}
            title={meal.strMeal}
            data-testid="video"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Recomended</h4>
          <p>Componente de recomendação</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <button
          type="button"
          className="btn btn-block btn-success mb-3"
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>
      </div>
    </div>
  );
}
