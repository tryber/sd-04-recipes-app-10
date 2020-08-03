const urls = {
  meals: {
    all: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    byName: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    byFirstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
    byIngredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
    byCategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
    categories: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  },
  drinks: {
    all: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    byName: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    byFirstLetter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
    byIngredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
    byCategory: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
    categories: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  },
};

export const getCategoriesMeals = async () => {
  const response = await fetch(urls.meals.categories);
  return response.json();
};

export const getCategoriesDrinks = async () => {
  const response = await fetch(urls.drinks.categories);
  return response.json();
};

export const getAllMeals = async () => {
  try {
    const response = await fetch(urls.meals.all);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { meals: [], error: true };
  }
};
export const getMealsByName = async (name) => {
  try {
    const response = await fetch(urls.meals.byName + name);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { meals: [], error: true };
  }
};
export const getMealsByFirstLetter = async (letter) => {
  try {
    const response = await fetch(urls.meals.byFirstLetter + letter);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { meals: [], error: true };
  }
};
export const getMealsByIngredient = async (ingredient) => {
  try {
    const response = await fetch(urls.meals.byIngredient + ingredient);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { meals: [], error: true };
  }
};
export const getMealsByCategory = async (category) => {
  try {
    const response = await fetch(urls.meals.byCategory + category);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { meals: [], error: true };
  }
};

export const getAllDrinks = async () => {
  try {
    const response = await fetch(urls.drinks.all);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { drinks: [], error: true };
  }
};
export const getDrinksByName = async (name) => {
  try {
    const response = await fetch(urls.drinks.byName + name);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { drinks: [], error: true };
  }
};
export const getDrinksByFirstLetter = async (letter) => {
  try {
    const response = await fetch(urls.drinks.byFirstLetter + letter);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { drinks: [], error: true };
  }
};
export const getDrinksByIngredient = async (ingredient) => {
  try {
    const response = await fetch(urls.drinks.byIngredient + ingredient);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { drinks: [], error: true };
  }
};
export const getDrinksByCategory = async (category) => {
  try {
    const response = await fetch(urls.drinks.byCategory + category);
    return { ...(await response.json()), error: false };
  } catch (e) {
    return { meals: [], error: true };
  }
};
