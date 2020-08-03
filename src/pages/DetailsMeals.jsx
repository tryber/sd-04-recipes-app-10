import React, { useEffect } from 'react';
import { mock } from '../services/mock';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { useState } from 'react';

const makeArray = () => {
  const ingredientsMeals = [];
  for (let i = 1; i <= 20; i += 1) {
    let number = mock[0][`strIngredient${i}`];
    if (number.length) {
      ingredientsMeals.push(number);
    }
  }
  return ingredientsMeals;
};

export default function DetailsMeals() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(makeArray());
  }, []);

  const meal = mock[0];
  return (
    <div className="container-fluid">
      <div className="row justify-content-center p-0">
        <div className="col-12 p-0">
          <img src={meal.strMealThumb} alt="foto" width="100%" />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <h3>{meal.strMeal}</h3>
          <h5>{meal.strCategory}</h5>
        </div>
        <div>
          <img src={shareIcon} alt="share" />
          <img src={whiteHeartIcon} alt="share" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={ingredient + index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>instructions</h4>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Vídeo</h4>
            <p>{meal.strYoutube}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Recomended</h4>
            <p>Componente de recomendação</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <button type="button" className="btn btn-success">Iniciar Receita</button>
      </div>
    </div>
  );
}
