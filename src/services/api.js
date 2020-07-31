const urls = {
  meals: {
    all: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    byName: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    byFirstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
    byIngredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  },
  drinks: {
    all: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    byName: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    byFirstLetter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
    byIngredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
  },
};

export const getAllMeals = async () => {
  const response = await fetch(urls.meals.all);
  return response.json();
};

export const getMealsByName = async (name) => {
  const response = await fetch(urls.meals.byName + name);
  return response.json();
};

export const getMealsByFirstLetter = async (letter) => {
  const response = await fetch(urls.meals.byFirstLetter + letter);
  return response.json();
};
export const getMealsByIngredient = async (ingredient) => {
  const response = await fetch(urls.meals.byIngredient + ingredient);
  return response.json();
};

export const getAllDrinks = async () => {
  const response = await fetch(urls.drinks.all);
  return response.json();
};
export const getDrinksByName = async (name) => {
  const response = await fetch(urls.drinks.byName + name);
  return response.json();
};
export const getDrinksByFirstLetter = async (letter) => {
  const response = await fetch(urls.drinks.byFirstLetter + letter);
  return response.json();
};
export const getDrinksByIngredient = async (ingredient) => {
  const response = await fetch(urls.drinks.byIngredient + ingredient);
  return response.json();
};
