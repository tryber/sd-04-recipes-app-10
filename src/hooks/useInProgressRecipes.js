import { useContext, useEffect, useCallback } from 'react';
import { UserContext } from '../contexts/UserContext';

const useInProgressRecipes = () => {
  const [, , , [inProgress, setInProgress]] = useContext(UserContext);

  const checkIfRecipeIsInProgress = useCallback(
    (recipe) => {
      if (
        recipe.idMeal &&
        inProgress.meals &&
        Object.keys(inProgress.meals).length
      ) {
        return Object.keys(inProgress.meals).some((id) => id === recipe.idMeal);
      }
      if (
        recipe.idDrink &&
        inProgress.cocktails &&
        Object.keys(inProgress.cocktails).length
      ) {
        return Object.keys(inProgress.cocktails).some(
          (id) => id === recipe.idDrink,
        );
      }
      return false;
    },
    [inProgress],
  );

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
  }, [inProgress]);

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
    inProgress,
    checkIfRecipeIsInProgress,
    addToInProgressRecipes,
  };
};

export default useInProgressRecipes;
