import { useContext, useEffect } from 'react';
import { MeatContext } from '../contexts/MeatContext';
import {
  getAllMeals,
  getMealsByFirstLetter,
  getMealsByIngredient,
  getMealsByName,
} from '../services/api';

const useMeals = () => {
  const [meals, setMeals] = useContext(MeatContext);

  const getMeals = (query = null) => {
    if (query) {
      switch (query.searchBy) {
        case 'ingredient':
          getMealsByIngredient(query.text).then((result) =>
            result.error ? alert('Nao achado') : setMeals(result),
          );
          break;
        case 'name':
          getMealsByName(query.text).then((result) =>
            result.error || !result.drinks ? alert('Nao achado') : setMeals(result),
          );
          break;
        case 'firstLetter':
          getMealsByFirstLetter(query.text).then((result) =>
            result.error ? alert('Nao achado') : setMeals(result),
          );
          break;
        default:
          getAllMeals(query.text).then((result) => setMeals(result));
          break;
      }
    } else {
      getAllMeals().then((result) => setMeals(result));
    }
  };

  return [meals, getMeals];
};

export default useMeals;
