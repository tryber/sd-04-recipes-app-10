const removeRecipe = (array, recipe) =>
  array.filter((element) => {
    if (recipe.idMeal) {
      return element.id !== recipe.idMeal;
    }
    return element.id !== recipe.idDrink;
  });

export default removeRecipe;
