import React from 'react';
import { Link } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import HeaderMeals from '../components/HeaderMeals';
import ButtonToggle from '../components/ButtonToggle';

import useFavoriteRecipes from '../hooks/useFavoriteRecipes';
import useCopy from '../hooks/useCopy';

const FavoriteRecipes = () => {
  const {
    handleFavoriteRecipes,
    favorites,
    checkIfRecipeIsFavorite,
    filterByType,
    toggleFilter,
  } = useFavoriteRecipes();
  const [message, copy] = useCopy();

  return (
    <React.Fragment>
      <HeaderMeals title="Receitas Favoritas" />
      <div className="row mt-1">
        <div className="col">
          <ButtonToggle setFilter={toggleFilter} />
          {filterByType(favorites).map((recipe, index) => (
            <div key={recipe.id} className="card px-1 mb-1">
              <div className="row">
                <div className="col">
                  <Link to={`/${recipe.type}s/${recipe.id}`}>
                    <img
                      data-testid={`${index}-horizontal-image`}
                      src={recipe.image}
                      width="100%"
                      alt="Food-Favorite"
                    />
                  </Link>
                </div>
                <div className="col">
                  {recipe.type === 'comida' && (
                    <p
                      className="mb-0 mt-1"
                      data-testid={`${index}-horizontal-top-text`}
                    >
                      {recipe.area} - {recipe.category}
                    </p>
                  )}
                  {recipe.type === 'bebida' && (
                    <p
                      className="mb-0 mt-1"
                      data-testid={`${index}-horizontal-top-text`}
                    >
                      {recipe.alcoholicOrNot}
                    </p>
                  )}
                  <Link
                    to={`/${recipe.type}s/${recipe.id}`}
                    data-testid={`${index}-horizontal-name`}
                  >
                    {recipe.name}
                  </Link>
                  <div className="d-flex justify-content-end align-items-center mt-3">
                    {message || (
                      <input
                        type="image"
                        data-testid={`${index}-horizontal-share-btn`}
                        src={shareIcon}
                        alt="share"
                        onClick={() =>
                          copy(
                            `http://localhost:3000/${recipe.type}s/${recipe.id}`,
                          )
                        }
                      />
                    )}
                    <input
                      data-testid={`${index}-horizontal-favorite-btn`}
                      className="pl-2"
                      type="image"
                      src={
                        checkIfRecipeIsFavorite({ idMeal: recipe.id })
                          ? blackHeartIcon
                          : whiteHeartIcon
                      }
                      alt="favorite"
                      onClick={() =>
                        handleFavoriteRecipes({ idMeal: recipe.id })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FavoriteRecipes;
