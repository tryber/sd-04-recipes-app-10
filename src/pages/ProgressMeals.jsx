import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import makeArray from '../utils/makeIngredientsArray';

import { getMealsById } from '../services/api';

import useFavoriteRecipes from '../hooks/useFavoriteRecipes';
import useInProgressRecipe from '../hooks/useInProgressRecipes';
import useDoneRecipes from '../hooks/useDoneRecipes';
import useCopy from '../hooks/useCopy';

import './ProgressMeals.css';

const ProgressMeals = () => {
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();
  const [inputs, setInputs] = useState(() => {
    const inputsInLocalStorage = localStorage.getItem('inProgressRecipes');
    if (
      inputsInLocalStorage &&
      Object.keys(JSON.parse(inputsInLocalStorage).meals).includes(id)
    ) {
      return JSON.parse(inputsInLocalStorage).meals[id];
    }
    return [];
  });
  const {
    checkIfRecipeIsFavorite,
    handleFavoriteRecipes,
  } = useFavoriteRecipes();
  const { addToInProgressRecipes } = useInProgressRecipe();
  const { addToDoneRecipes } = useDoneRecipes();
  const [message, copy] = useCopy(`http://localhost:3000/comidas/${id}`);
  const history = useHistory();

  useEffect(() => {
    getMealsById(id).then(({ meals }) => {
      const x = meals[0];
      setMeal(x);
      setIngredients(makeArray(x));
    });
  }, [id]);

  useEffect(() => {
    addToInProgressRecipes('meals', id, inputs);
    //  eslint-disable-next-line
  }, [inputs]);

  const handleInput = (x) => {
    if (inputs.includes(x)) {
      setInputs(inputs.filter((input) => input !== x));
    } else {
      setInputs([...inputs, x]);
    }
  };

  const handleFinishRecipe = () => {
    addToDoneRecipes(meal);
    setTimeout(() => {
      history.push('/receitas-feitas');
    }, 500);
  };

  return (
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
        <div>
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
            type="image"
            data-testid="favorite-btn"
            src={
              checkIfRecipeIsFavorite(meal) ? blackHeartIcon : whiteHeartIcon
            }
            alt="share"
            onClick={() => handleFavoriteRecipes(meal)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Ingredients</h4>
          <div className="bg-light">
            {ingredients.map((ingredient, index) => (
              <div
                className="form-check"
                key={ingredient}
                data-testid={`${index}-ingredient-step`}
              >
                <label
                  className={
                    inputs.some((input) => input === ingredient)
                      ? 'form-check-label done'
                      : 'form-check-label cc'
                  }
                  htmlFor={index}
                >
                  <input
                    defaultChecked={inputs.some(
                      (input) => input === ingredient,
                    )}
                    type="checkbox"
                    name={index}
                    className="form-check-input cc"
                    value={ingredient}
                    onClick={(e) => handleInput(e.target.value)}
                  />

                  {ingredient}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row mb-4">
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
          className="btn btn-block btn-success fixed-bottom cc"
          data-testid="finish-recipe-btn"
          disabled={ingredients.length !== inputs.length}
          onClick={handleFinishRecipe}
        >
          Finalizar Receita
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProgressMeals;
