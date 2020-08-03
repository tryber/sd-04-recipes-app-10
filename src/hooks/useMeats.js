import { useContext } from 'react';
import { MeatContext } from '../contexts/MeatContext';
import {
  getAllMeals,
  getMealsByFirstLetter,
  getMealsByIngredient,
  getMealsByName,
} from '../services/api';

const useMeals = () => {
  const [meals, setMeals] = useContext(MeatContext);

  const getMeals = (query = null, callback) => {
    if (query) {
      switch (query.searchBy) {
        case 'ingredient':
          getMealsByIngredient(query.text).then((result) => {
            callback(result);
            setMeals(result);
          });
          break;
        case 'name':
          getMealsByName(query.text).then((result) => {
            callback(result);
            setMeals(result);
          });
          break;
        case 'firstLetter':
          getMealsByFirstLetter(query.text).then((result) => {
            callback(result);
            setMeals(result);
          });
          break;
        default:
          getAllMeals(query.text).then((result) => {
            callback(result);
            setMeals(result);
          });
          break;
      }
    } else {
      getAllMeals().then((result) => {
        callback(result);
        setMeals(result);
      });
    }
  };

  return [meals, getMeals];
};

export default useMeals;
