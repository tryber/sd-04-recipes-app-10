import { useContext, useEffect } from 'react';
import { MeatContext } from '../contexts/MeatContext';
import {
  getAllMeals,
  getMealsByFirstLetter,
  getMealsByIngredient,
  getMealsByName,
  getCategoriesMeals,
} from '../services/api';

const useMeals = () => {
  const [meals, setMeals] = useContext(MeatContext);

  useEffect(() => {
    getAllMeals().then((result) => setMeals(result.meals));
  }, [setMeals]);

  const getMeals = (query = null) => {
    if (query) {
      switch (query.searchBy) {
        case 'ingredient':
          getMealsByIngredient(query.text).then((result) => setMeals(result.meals));
          break;
        case 'name':
          getMealsByName(query.text).then((result) => setMeals(result.meals));
          break;
        case 'firstLetter':
          getMealsByFirstLetter(query.text).then((result) => setMeals(result.meals));
          break;
        default:
          getAllMeals(query.text).then((result) => setMeals(result.meals));
          break;
      }
    } else {
      getAllMeals().then((result) => setMeals(result.meals));
    }
  };

  return [meals, getMeals];
};

export default useMeals;
