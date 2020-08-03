import { useContext } from 'react';
import { DrinkContext } from '../contexts/DrinkContext';
import {
  getAllDrinks,
  getDrinksByFirstLetter,
  getDrinksByIngredient,
  getDrinksByName,
} from '../services/api';

const useDrinks = () => {
  const [drinks, setDrinks] = useContext(DrinkContext);

  const getDrinks = (query = null, callback) => {
    if (query) {
      switch (query.searchBy) {
        case 'ingredient':
          getDrinksByIngredient(query.text).then((result) => {
            callback(result);
            setDrinks(result);
          });
          break;
        case 'name':
          getDrinksByName(query.text).then((result) => {
            callback(result);
            setDrinks(result);
          });
          break;
        case 'firstLetter':
          getDrinksByFirstLetter(query.text).then((result) => {
            callback(result);
            setDrinks(result);
          });
          break;
        default:
          getAllDrinks(query.text).then((result) => {
            callback(result);
            setDrinks(result);
          });
          break;
      }
    } else {
      getAllDrinks().then((result) => {
        callback(result);
        setDrinks(result.drinks);
      });
    }
  };

  return [drinks, getDrinks];
};

export default useDrinks;
