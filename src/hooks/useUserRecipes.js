import { useContext, useEffect, useState, useCallback } from 'react';
import { UserContext } from '../contexts/UserContext';

const useUserRecipes = (currentRecipe) => {
  const [
    ,
    [dones, setDones],
    [favorites, setFavorites],
    [inProgress, setInProgress],
  ] = useContext(UserContext);

  const checkIfRecipeIsInProgress = useCallback(() => {
    if (inProgress.meals && Object.keys(inProgress.meals).length) {
      return Object.keys(inProgress.meals).some(
        (id) => id === currentRecipe.idMeal,
      );
    }
    if (inProgress.cocktails && Object.keys(inProgress.cocktails).length) {
      return Object.keys(inProgress.cocktails).some(
        (id) => id === currentRecipe.idDrink,
      );
    }
    return false;
  }, [currentRecipe, inProgress]);

  const checkIfRecipeIsInArray = useCallback(
    (element) =>
      element.id === currentRecipe.idMeal ||
      element.id === currentRecipe.idDrink,
    [currentRecipe],
  );

  const [enableHeart, setEnableHeart] = useState(() =>
    favorites.some(checkIfRecipeIsInArray),
  );

  const [isRecipeDoneOrInProgress, setIsRecipeDoneOrInProgress] = useState(
    () => {
      if (checkIfRecipeIsInProgress()) {
        return 'progress';
      }
      if (dones.some(checkIfRecipeIsInArray)) {
        return 'done';
      }
      return 'none';
    },
  );

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(dones));
    if (dones.some(checkIfRecipeIsInArray)) {
      setIsRecipeDoneOrInProgress('done');
    }
  }, [dones, checkIfRecipeIsInArray]);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setEnableHeart(favorites.some(checkIfRecipeIsInArray));
  }, [favorites, checkIfRecipeIsInArray]);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    if (checkIfRecipeIsInProgress()) {
      setIsRecipeDoneOrInProgress('progress');
    }
  }, [inProgress, checkIfRecipeIsInProgress]);

  const genericRemoveRecipe = (array, recipe) =>
    array.filter((favRecipe) => {
      if (recipe.idMeal) {
        return favRecipe.id !== recipe.idMeal;
      }
      return favRecipe.id !== recipe.idDrink;
    });

  const addToDoneRecipes = (recipe) => {
    setDones([
      ...dones,
      {
        id: recipe.idMeal || recipe.idDrink,
        type: recipe.idMeal ? 'comida' : 'bebida',
        area: recipe.strArea || '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic || '',
        name: recipe.strMeal || recipe.strDrink,
        image: recipe.strMealThumb || recipe.strDrinkThumb,
        doneDate: new Date(),
        tags: recipe.strTags.split(',') || [],
      },
    ]);
    setInProgress(genericRemoveRecipe(inProgress, recipe));
  };

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
    setFavorites(genericRemoveRecipe(favorites, recipe));

  const handleFavoriteRecipes = (recipe) => {
    if (favorites.some(checkIfRecipeIsInArray)) {
      removeFromFavorites(recipe);
    } else {
      addToFavorites(recipe);
    }
  };
  const addToInProgressRecipes = (key, id, ingredients = []) => {
    if (key === 'meals') {
      setInProgress({
        ...inProgress,
        meals: {
          ...inProgress.meals,
          [id]: ingredients,
        },
      });
    } else {
      setInProgress({
        ...inProgress,
        cocktails: {
          ...inProgress.cocktails,
          [id]: ingredients,
        },
      });
    }
  };

  return {
    addToDoneRecipes,
    handleFavoriteRecipes,
    addToInProgressRecipes,
    enableHeart,
    isRecipeDoneOrInProgress,
  };
};

export default useUserRecipes;
