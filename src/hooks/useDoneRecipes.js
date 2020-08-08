import { useContext, useEffect, useState, useCallback } from 'react';
import { UserContext } from '../contexts/UserContext';
import removeRecipeFromInProgress from '../utils/removeRecipeFromInProgress';

const useDoneRecipes = () => {
  const [, [dones, setDones], , [inProgress, setInProgress]] = useContext(
    UserContext,
  );
  const [filter, setFilter] = useState('All');

  const toggleFilter = (newFilter) =>
    setFilter(filter === newFilter ? 'All' : newFilter);

  const filterByType = (doneRecipes) =>
    doneRecipes.filter((recipe) => filter === 'All' || recipe.type === filter);

  const checkIfRecipeIsDone = useCallback(
    (recipe) => {
      return dones.some(
        (doneRecipe) =>
          doneRecipe.id === recipe.idMeal || doneRecipe.id === recipe.idDrink,
      );
    },
    [dones],
  );

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(dones));
  }, [dones]);

  const addToDoneRecipes = (recipe) => {
    if (!checkIfRecipeIsDone(recipe)) {
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
          doneDate: new Date().toLocaleDateString('pt-BR'),
          tags: recipe.strTags ? recipe.strTags.split(',') : [],
        },
      ]);
      setInProgress(removeRecipeFromInProgress(inProgress, recipe));
    }
  };

  return {
    dones,
    toggleFilter,
    addToDoneRecipes,
    filterByType,
    checkIfRecipeIsDone,
  };
};

export default useDoneRecipes;
