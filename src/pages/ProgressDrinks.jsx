import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import makeArray from '../utils/makeIngredientsArray';
import { getDrinksById } from '../services/api';
import useUserRecipes from '../hooks/useUserRecipes';

export default function ProgressMeals() {
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();
  const { addToInProgressRecipes } = useUserRecipes(drink);

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
          <img data-testid="share-btn" src={shareIcon} alt="share" />
          <img data-testid="favorite-btn" src={whiteHeartIcon} alt="share" />
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
                >
                  <input
                    data-testid={`${index}-ingredient-step`}
                    type="checkbox"
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
      <div className="row">
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
        >
          Finalizar Receita
        </button>
      </div>
    </React.Fragment>
  );
}
