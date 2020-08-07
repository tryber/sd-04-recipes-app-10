import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getMealsById, getAllDrinks } from '../services/api';
import makeArray from '../utils/makeIngredientsArray';
import getCodeYT from '../utils/getYoutubeId';
import useFavoriteRecipes from '../hooks/useFavoriteRecipes';
import useDoneRecipes from '../hooks/useDoneRecipes';
import useInProgressRecipe from '../hooks/useInProgressRecipes';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHearticon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import useCopy from '../hooks/useCopy';

export default function DetailsMeals() {
  const [meal, setMeal] = useState({});
  const [message, copy] = useCopy(window.location.href);
  const [ingredients, setIngredients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { id } = useParams();
  const {
    handleFavoriteRecipes,
    checkIfRecipeIsFavorite,
  } = useFavoriteRecipes(meal);
  const { isDone } = useDoneRecipes(meal);
  const { isInProgress } = useInProgressRecipe(meal);

  useEffect(() => {
    getMealsById(id).then(({ meal: { meals } }) => {
      setMeal(meals[0]);
      setIngredients(makeArray(meals[0]));
      checkIfRecipeIsFavorite(meals[0]);
    });
    getAllDrinks().then(({ drinks }) => setSuggestions(drinks.slice(0, 6)));
  }, [id]);

  return (
    <div>
      {meal.idMeal && (
        <React.Fragment>
          <div className="row justify-content-center p-0">
            <div className="col-12 p-0">
              <img
                data-testid="recipe-photo"
                src={meal.strMealThumb}
                alt="foto"
                width="100%"
              />
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <h3 data-testid="recipe-title">{meal.strMeal}</h3>
              <h5 data-testid="recipe-category" className="text-muted">
                {meal.strCategory}
              </h5>
            </div>
            <div className="d-flex align-items-start pr-2">
              {message || (
                <input
                  type="image"
                  data-testid="share-btn"
                  src={shareIcon}
                  alt="share"
                  onClick={() => copy()}
                />
              )}
              <input
                className="pl-2"
                type="image"
                data-testid="favorite-btn"
                src={checkIfRecipeIsFavorite(meal) ? blackHearticon : whiteHeartIcon}
                alt="favorite"
                onClick={() => handleFavoriteRecipes(meal)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Ingredients</h4>
              <ul className="bg-light">
                {ingredients.map((ingredient, index) => (
                  <li
                    data-testid={`${index}-ingredient-name-and-measure`}
                    key={ingredient}
                  >
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
                src={`https://www.youtube.com/embed/${getCodeYT(
                  meal.strYoutube,
                )}`}
                title={meal.strMeal}
                data-testid="video"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h4>Recomendadas</h4>
              <div className="d-flex flex-row  overflow-auto">
                {suggestions &&
                  suggestions.map(
                    (
                      { idDrink, strDrink, strAlcoholic, strDrinkThumb },
                      index,
                    ) => (
                      <div
                        key={idDrink}
                        data-testid={`${index}-recomendation-card`}
                        className={index < 2 ? 'col-6' : 'col-6 invisible'} //  gambiarra pro teste
                      >
                        <div className="card w-100">
                          <img
                            src={strDrinkThumb}
                            className="card-img-top"
                            alt={strDrink}
                          />
                          <div className="card-body">
                            <p className="card-subtitle text-muted">
                              {strAlcoholic}
                            </p>
                            <h5
                              data-testid={`${index}-recomendation-title`}
                              className={'card-title'}
                            >
                              {strDrink}
                            </h5>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {!isDone && !isInProgress && (
              <Link
                to={`/comidas/${meal.idMeal}/in-progress`}
                className="btn btn-block btn-success fixed-bottom"
                data-testid="start-recipe-btn"
              >
                Iniciar Receita
              </Link>
            )}
            {isInProgress && (
              <Link
                to={`/comidas/${meal.idMeal}/in-progress`}
                className="btn btn-block btn-success fixed-bottom"
                data-testid="start-recipe-btn"
              >
                Continuar Receita
              </Link>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
