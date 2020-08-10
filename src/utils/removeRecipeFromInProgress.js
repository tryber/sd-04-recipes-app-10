const removeRecipeFromInProgress = (inProgress, recipe) => ({
  meals: Object.keys(inProgress.meals).reduce((acc, id) => {
    if (id !== recipe.idMeal) {
      acc[id] = inProgress.meals[id];
    }
    return acc;
  }, {}),
  cocktails: Object.keys(inProgress.cocktails).reduce((acc, id) => {
    if (id !== recipe.idDrink) {
      acc[id] = inProgress.cocktails[id];
    }
    return acc;
  }, {}),
});

export default removeRecipeFromInProgress;
