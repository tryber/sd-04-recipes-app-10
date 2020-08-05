import React from 'react';
import HeaderMeals from '../components/HeaderMeals';
import mock from '../services/mock';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function DoneRecipes() {
  const meal = mock[0];

  return (
    <React.Fragment>
      <HeaderMeals title="Receitas Feitas" />;
    <div className="row justify-content-center mb-2 mt-5">
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
          // onClick={() => toggleFilter('All')}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
          // onClick={() => toggleFilter('All')}
      >
        Food
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
          // onClick={() => toggleFilter('All')}
      >
        Drinks
      </button>
    </div>
      <div className="card pt-2">
        <div className="row">
          <div className="col">
            <img src={meal.strMealThumb} width="100%" alt="Food" />
          </div>
          <div className="col">
            <div className="row">
              <p>
                {meal.strCategory}, {meal.strArea}
              </p>
            </div>
            <div className="row">
              <p >
                {meal.strMeal}
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
            <img src={meal.strMealThumb} width="100%" alt="Food" />
          </div>
          <div className="col">
            <div className="row">
              <p>
              {meal.strCategory}, {meal.strArea}
              </p>
            </div>
            <div className="row">
              <p>
                {meal.strMeal}
              </p>
            </div>
            <div className="row d-flex justify-content-around">
              <img src={shareIcon} alt="Share" />
              <img data-testid={`${index}-horizontal-favorite-btn`}  src={blackHeartIcon} alt="Icon-Heart" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
