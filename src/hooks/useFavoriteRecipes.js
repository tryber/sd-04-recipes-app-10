import { useContext, useEffect, useCallback, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import removeRecipe from '../utils/removeRecipe';

const useFavoriteRecipes = () => {
  const [, , [favorites, setFavorites]] = useContext(UserContext);

  const [filter, setFilter] = useState('All');

  const toggleFilter = (newFilter) =>
    setFilter(filter === newFilter ? 'All' : newFilter);

  const filterByType = (favoriteRecipes) =>
    favoriteRecipes.filter(
      (recipe) => filter === 'All' || recipe.type === filter,
    );

  const checkIfRecipeIsFavorite = useCallback(
    (recipe) =>
      favorites.some(
        (favoriteRecipe) =>
          favoriteRecipe.id === recipe.idMeal ||
          favoriteRecipe.id === recipe.idDrink,
      ),

    [favorites],
  );

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (recipe) =>
    setFavorites([
      ...favorites,
      {
        id: recipe.idMeal || recipe.idDrink,
        type: recipe.idMeal ? 'comida' : 'bebida',
        area: recipe.strArea || '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic || '',
        name: recipe.strMeal || recipe.strDrink,
        image: recipe.strMealThumb || recipe.strDrinkThumb,
      },
    ]);

  const removeFromFavorites = (recipe) =>
    setFavorites(removeRecipe(favorites, recipe));

  const handleFavoriteRecipes = (recipe) => {
    if (checkIfRecipeIsFavorite(recipe)) {
      removeFromFavorites(recipe);
    } else {
      addToFavorites(recipe);
    }
  };

  return {
    favorites,
    handleFavoriteRecipes,
    checkIfRecipeIsFavorite,
    toggleFilter,
    filterByType,
  };
};

export default useFavoriteRecipes;
