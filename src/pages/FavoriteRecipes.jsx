import { link, Link } from 'react-router-dom';
import React from 'react';
import HeaderMeals from '../components/HeaderMeals';
import mock from '../services/mock';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
// import ButtonToggle from '../components/ButtonToggle';

export default function DoneRecipes() {
  const meal = mock[0];

  return (
    <React.Fragment>
      <HeaderMeals title="Receitas Feitas" />;
        {/* <ButtonToggle /> */}
      <div className="card pt-2">
        <div className="row">
          <div className="col">
            <Link to="/comidas">
              <img src={meal.strMealThumb} width="100%" alt="Food-Favorite" />
            </Link>
          </div>
          <div className="col">
            <div className="row">
              <p>
                {meal.strCategory}, {meal.strArea}
              </p>
            </div>
            <div className="row">
              <p >
                <Link to="/comidas">
                  {meal.strMeal}
                </Link>
              </p>
            </div>
            <div className="row d-flex justify-content-around">
              <img src={shareIcon} alt="Share" />
              <img src={blackHeartIcon} alt="Icon-Heart" />
            </div>
          </div>
        </div>
      </div>
      <div className="card pt-2">
        <div className="row">
          <div className="col">
            <Link to="/comidas">
              <img src={meal.strMealThumb} width="100%" alt="Food-Favorite" />
            </Link>
          </div>
          <div className="col">
            <div className="row">
              <p>
                {meal.strCategory}, {meal.strArea}
              </p>
            </div>
            <div className="row">
              <p>
                <Link to="/comidas">
                  {meal.strMeal}
                </Link>
              </p>
            </div>
            <div className="row d-flex justify-content-around">
              <img src={shareIcon} alt="Share" />
              <img data-testid={`-horizontal-favorite-btn`} src={blackHeartIcon} alt="Icon-Heart" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
