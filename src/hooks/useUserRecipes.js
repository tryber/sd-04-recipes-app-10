import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

const useUserRecipes = () => {
  const [, [dones, setDones], [favorites, setFavorites], [inProgress, setInProgress]] = useContext(
    UserContext,
  );

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(dones));
  }, [dones]);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
  }, [inProgress]);

  const genericRemoveRecipe = (array, recipe) =>
    array.filter((favRecipe) => {
      if (recipe.idMeal) {
        return favRecipe.idMeal !== recipe.idMeal;
      } else {
        return favRecipe.idDrink !== recipe.idDrink;
      }
    });

  const addToDoneRecipes = (recipe) => {
    setDones([...dones, recipe]);
    setInProgress(genericRemoveRecipe(inProgress, recipe));
  };

  const addToFavoriteRecipes = (recipe) => setFavorites([...favorites, recipe]);

  const addToInProgressRecipes = (recipe) => setInProgress([...inProgress, recipe]);

  const removeFromFavoriteRecipes = (recipe) =>
    setFavorites(genericRemoveRecipe(favorites, recipe));

  return {
    addToDoneRecipes,
    addToFavoriteRecipes,
    addToInProgressRecipes,
    removeFromFavoriteRecipes,
  };
};

export default useUserRecipes;
