import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMeals from '../components/HeaderMeals';
import ButtonToggle from '../components/ButtonToggle';
import shareIcon from '../images/shareIcon.svg';
import useCopy from '../hooks/useCopy';
import useDoneRecipes from '../hooks/useDoneRecipes';

export default function DoneRecipes() {
  const [message, copy] = useCopy(window.location.href);

  function getTag(tags) {
    const newTags = tags.split(',');
    const result = newTags.slice(0, 2);
    return result;
  }

  return (
    <React.Fragment>
      <HeaderMeals title="Receitas Feitas" />;
      <ButtonToggle />
      {/* {dones.map((recipe) => (
        <div key={recipe.id} className="card pt-2">
          <div className="row">
            <div className="col">
              <Link to="/comidas">
                <img
                  data-testid={'-horizontal-image'}
                  src={recipe.image}
                  width="100%"
                  alt="Food"
                />
              </Link>
            </div>
            <div className="col">
              <div className="row">
                <p data-testid={'-horizontal-top-text'}>
                  {recipe.category}, {recipe.area}
                </p>
                {message || (
                  <button type="button" onClick={() => copy()}>
                    <img
                      data-testid={'-horizontal-share-btn'}
                      src={shareIcon}
                      alt="Share"
                    />
                  </button>
                )}
              </div>
              <div className="row">
                <Link to="/comidas">
                  <p data-testid={'-horizontal-name'}>{recipe.name}</p>
                </Link>
              </div>
              <div className="row">
                <p data-testid={'-horizontal-done-date'}>Feito em {recipe.doneDate}</p>
              </div>
              <div data-testid={'-horizontal-tag'} className="row">
                {getTag(recipe.tags).map((tag) => (
                  <p key={tag} className="mr-2">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </React.Fragment>
  );
}
