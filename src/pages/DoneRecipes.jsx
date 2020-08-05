import React from 'react';
import HeaderMeals from '../components/HeaderMeals';
import mock from '../services/mock';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipes() {
  const meal = mock[0];

  function getTag(tags) {
    const newTags = tags.split(',');
    const result = newTags.slice(0, 2);
    return result;
  }

  return (
    <React.Fragment>
      <HeaderMeals title="Receitas Feitas" />;

    <div className="row justify-content-center mb-2 mt-5">
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
        data-testid="All-category-filter"
        // onClick={() => toggleFilter('All')}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
        data-testid="All-category-filter"
        // onClick={() => toggleFilter('All')}
      >
        Food
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
        data-testid="All-category-filter"
        // onClick={() => toggleFilter('All')}
      >
        Drinks
      </button>
    </div>
      <div className="card pt-2">
        <div className="row">
          <div className="col">
            <img data-testid={`${index}-horizontal-image`} src={meal.strMealThumb} width="100%" alt="Food" />
          </div>
          <div className="col">
            <div className="row">
              <p data-testid={`${index}-horizontal-top-text`} >
              {meal.strCategory}, {meal.strArea}
            </p>
              <img data-testid={`${index}-horizontal-share-btn`} src={shareIcon} alt="Share" />
            </div>
            <div className="row">
              <p data-testid={`${index}-horizontal-name`}>
              {meal.strMeal}
            </p>
            </div>
            <div className="row">
              <p data-testid={`${index}-horizontal-done-date`}>
              Feito em 05/08/2020
            </p>
            </div>
            <div data-testid={`${index}-${tagName}-horizontal-tag`} className="row">
              {getTag(meal.strTags).map((tag) => <p key={tag} className="mr-2">{tag}</p>)}
            </div>
          </div>
        </div>
      </div>
      <div className="card pt-2">
        <div className="row">
          <div className="col">
          <img data-testid={`${index}-horizontal-image`} src={meal.strMealThumb} width="100%" alt="Food" />
        </div>
          <div className="col">
            <div className="row">
            <p data-testid={`${index}-horizontal-top-text`}>
              {meal.strCategory}, {meal.strArea}
            </p>
            <img data-testid={`${index}-horizontal-share-btn`} src={shareIcon} alt="Share" />
          </div>
            <div className="row">
            <p data-testid={`${index}-horizontal-name`} >
              {meal.strMeal}
            </p>
          </div>
            <div className="row">
            <p data-testid={`${index}-horizontal-done-date`}>
              Feito em 29/07/2020
            </p>
          </div>
            <div data-testid={`${index}-${tagName}-horizontal-tag`} className="row">
            {getTag(meal.strTags).map((tag) => <p key={tag} className="mr-2">{tag}</p>)}
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
