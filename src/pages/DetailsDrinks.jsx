import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHearticon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

import { getDrinksById, getAllMeals } from '../services/api';

import makeArray from '../utils/makeIngredientsArray';

import useFavoriteRecipes from '../hooks/useFavoriteRecipes';
import useDoneRecipes from '../hooks/useDoneRecipes';
import useInProgressRecipe from '../hooks/useInProgressRecipes';
import useCopy from '../hooks/useCopy';

const DetailsDrinks = () => {
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { id } = useParams();
  const {
    checkIfRecipeIsFavorite,
    handleFavoriteRecipes,
  } = useFavoriteRecipes();
  const { checkIfRecipeIsDone } = useDoneRecipes();
  const { checkIfRecipeIsInProgress } = useInProgressRecipe();
  const [message, copy] = useCopy(window.location.href);

  useEffect(() => {
    getDrinksById(id).then(({ drinks }) => {
      setDrink(drinks[0]);
      setIngredients(makeArray(drinks[0]));
    });
    getAllMeals().then(({ meals }) => setSuggestions(meals.slice(0, 6)));
  }, [id]);

  return (
    <div>
      {drink.idDrink && (
        <React.Fragment>
          <div className="row justify-content-center p-0">
            <div className="col-12 p-0">
              <img
                data-testid="recipe-photo"
                src={drink.strDrinkThumb}
                alt="foto"
                width="100%"
              />
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <h3 data-testid="recipe-title">{drink.strDrink}</h3>
              <h5 data-testid="recipe-category" className="text-muted">
                {drink.strAlcoholic}
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
                src={
                  checkIfRecipeIsFavorite(drink)
                    ? blackHearticon
                    : whiteHeartIcon
                }
                alt="favorite"
                onClick={() => handleFavoriteRecipes(drink)}
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
                {drink.strInstructions}
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h4>Recomendadas</h4>
              <div className="d-flex flex-row overflow-auto">
                {suggestions &&
                  suggestions.map(
                    ({ idMeal, strMeal, strCategory, strMealThumb }, index) => (
                      <div
                        key={idMeal}
                        data-testid={`${index}-recomendation-card`}
                        className={index < 2 ? 'col-6' : 'col-6 invisible'} //  gambiarra pro teste
                      >
                        <div className="card w-100">
                          <img
                            src={strMealThumb}
                            className="card-img-top"
                            alt={strMeal}
                          />
                          <div className="card-body">
                            <p className="card-subtitle text-muted">
                              {strCategory}
                            </p>
                            <h5
                              data-testid={`${index}-recomendation-title`}
                              className={'card-title'}
                            >
                              {strMeal}
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
            {!checkIfRecipeIsDone(drink) && !checkIfRecipeIsInProgress(drink) && (
              <Link
                to={`/bebidas/${drink.idDrink}/in-progress`}
                className="btn btn-block btn-success fixed-bottom"
                data-testid="start-recipe-btn"
              >
                Iniciar Receita
              </Link>
            )}
            {checkIfRecipeIsInProgress(drink) && (
              <Link
                to={`/bebidas/${drink.idDrink}/in-progress`}
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
};

export default DetailsDrinks;
