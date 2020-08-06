import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import makeArray from '../utils/makeIngredientsArray';
import { getDrinksById } from '../services/api';
import useUserRecipes from '../hooks/useUserRecipes';
import useCopy from '../hooks/useCopy';

export default function ProgressMeals() {
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();
  const [inputs, setInputs] = useState(() => {
    const inputsInLocalStorage = localStorage.getItem('inProgressRecipes');
    if (inputsInLocalStorage && Object.keys(JSON.parse(inputsInLocalStorage).cocktails).includes(id))
      return JSON.parse(inputsInLocalStorage).cocktails[id];
    return [];
  });
  const { addToInProgressRecipes, handleFavoriteRecipes, enableHeart } = useUserRecipes(drink);
  const [message, copy] = useCopy(`http://localhost:3000/bebidas/${id}`);
  const history = useHistory();

  useEffect(() => {
    getDrinksById(id).then(({ drink: { drinks } }) => {
      setDrink(drinks[0]);
      setIngredients(makeArray(drinks[0]));
    });
  }, [id]);

  useEffect(() => {
    addToInProgressRecipes('cocktails', id, inputs);
    //  eslint-disable-next-line
  }, [inputs]);

  function handleInput(e) {
    if (inputs.includes(e)) {
      setInputs(inputs.filter((input) => input !== e));
    } else {
      setInputs([...inputs, e]);
    }
  }
  return (
    <React.Fragment>
      <div className="row justify-content-center p-0">
        <div className="col-12 p-0">
          <img data-testid="recipe-photo" src={drink.strDrinkThumb} alt="foto" width="100%" />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <h3 data-testid="recipe-title">{drink.strDrink}</h3>
          <h5 data-testid="recipe-category" className="text-muted">
            {drink.strCategory}
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
            src={enableHeart ? blackHeartIcon : whiteHeartIcon}
            alt="share"
            onClick={() => handleFavoriteRecipes(drink)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Ingredients</h4>
          <div className="bg-light">
            {ingredients.map((ingredient, index) => (
              <div className="form-check" key={ingredient}>
                <label
                  className={
                    inputs.some((input) => input === ingredient)
                      ? 'form-check-label done'
                      : 'form-check-label'
                  }
                  htmlFor={index}
                  data-testid={`${index}-ingredient-step`}
                >
                  <input
                    defaultChecked={inputs.some((input) => input === ingredient)}
                    type="checkbox"
                    name={index}
                    className="form-check-input"
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
            {drink.strInstructions}
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <button
          type="button"
          className="btn btn-block btn-success fixed-bottom"
          data-testid="finish-recipe-btn"
          disabled={ingredients.length === inputs.length ? false : true}
          onClick={() => history.push('/receitas-feitas')}
        >
          Finalizar Receita
        </button>
      </div>
    </React.Fragment>
  );
}
