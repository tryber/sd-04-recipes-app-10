const makeArray = (meal) => {
  const ingredientsMeals = [];
  for (let i = 1; i <= 20; i += 1) {
    const ingredients = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    const result = `${ingredients} - ${measure}`;
    if (ingredients && ingredients.length) {
      ingredientsMeals.push(result);
    }
  }
  return ingredientsMeals;
};

export default makeArray;
