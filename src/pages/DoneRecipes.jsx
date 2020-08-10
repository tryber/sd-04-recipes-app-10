import React from 'react';
import { Link } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';

import HeaderMeals from '../components/HeaderMeals';
import ButtonToggle from '../components/ButtonToggle';

import useCopy from '../hooks/useCopy';
import useDoneRecipes from '../hooks/useDoneRecipes';

const DoneRecipes = () => {
  const [message, copy] = useCopy();
  const { dones, filterByType, toggleFilter } = useDoneRecipes();

  const getTag = (tags) => {
    const result = tags.slice(0, 2);
    return result;
  };

  return (
    <React.Fragment>
      <HeaderMeals title="Receitas Feitas" />;
      <ButtonToggle setFilter={toggleFilter} />
      {filterByType(dones).map((recipe, index) => (
        <div key={recipe.id} className="card pt-2">
          <div className="row">
            <div className="col">
              <Link to={`/${recipe.type}s/${recipe.id}`}>
                <img
                  data-testid={`${index}-horizontal-image`}
                  src={recipe.image}
                  width="100%"
                  alt="Food"
                />
              </Link>
            </div>
            <div className="col">
              <div className="row">
                <p data-testid={`${index}-horizontal-top-text`}>
                  {recipe.area || recipe.alcoholicOrNot} - {recipe.category}
                </p>
                {message || (
                  <button
                    type="button"
                    onClick={() =>
                      copy(`http://localhost:3000/${recipe.type}s/${recipe.id}`)
                    }
                  >
                    <img
                      data-testid={`${index}-horizontal-share-btn`}
                      src={shareIcon}
                      alt="Share"
                    />
                  </button>
                )}
              </div>
              <div className="row">
                <Link to={`/${recipe.type}s/${recipe.id}`}>
                  <p data-testid={`${index}-horizontal-name`}>{recipe.name}</p>
                </Link>
              </div>
              <div className="row">
                <p>
                  Feito em{' '}
                  <span data-testid={`${index}-horizontal-done-date`}>
                    {recipe.doneDate}
                  </span>
                </p>
              </div>
              <div className="row">
                {getTag(recipe.tags).map((tag) => (
                  <p
                    data-testid={`${index}-${tag}-horizontal-tag`}
                    key={tag}
                    className="mr-2"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default DoneRecipes;
