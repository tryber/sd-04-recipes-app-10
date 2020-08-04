import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { getMealsById, getAllDrinks } from '../services/api';

const makeArray = (meal) => {
  const ingredientsMeals = [];
  for (let i = 1; i <= 20; i += 1) {
    const ingredients = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
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
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMealsById(id).then(({ meal: { meals } }) => {
      setMeal(meals[0]);
      setIngredients(makeArray(meals[0]));
    });
    getAllDrinks().then(({ drinks }) => setSuggestions(drinks));
  }, [id]);

  return (
    <div>
      {meal.idMeal && (
        <>
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
                  <li data-testid={`${index}-ingredient-name-and-measure`} key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </ul>
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
          <div className="row mb-5">
            <div className="col">
              <h4>Recomendadas</h4>
              <div className="d-flex flex-row flex-nowrap overflow-auto">
                {suggestions &&
                  suggestions
                    .slice(0, 6)
                    .map(({ idDrink, strDrink, strAlcoholic, strDrinkThumb }) => (
                      <div key={idDrink} className="col-6">
                        <div className="card w-100">
                          <img src={strDrinkThumb} className="card-img-top" alt={strDrink} />
                          <div className="card-body">
                            <p className="card-subtitle text-muted">{strAlcoholic}</p>
                            <h5 className="card-title">{strDrink}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
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
        </>
      )}
    </div>
  );
}
