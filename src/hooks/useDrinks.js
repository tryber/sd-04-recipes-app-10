import { useContext, useEffect } from 'react';
import { DrinkContext } from '../contexts/DrinkContext';
import {
  getAllDrinks,
  getDrinksByFirstLetter,
  getDrinksByIngredient,
  getDrinksByName,
} from '../services/api';

const useDrinks = () => {
  const [drinks, setDrinks] = useContext(DrinkContext);

  useEffect(() => {
    console.log(drinks);
  }, [drinks]);

  const getDrinks = (query = null) => {
    if (query) {
      switch (query.searchBy) {
        case 'ingredient':
          getDrinksByIngredient(query.text).then((result) =>
            result.error ? alert('Nao achado') : setDrinks(result),
          );
          break;
        case 'name':
          getDrinksByName(query.text).then((result) =>
            result.error || !result.drinks ? alert('Nao achado') : setDrinks(result),
          );
          break;
        case 'firstLetter':
          getDrinksByFirstLetter(query.text).then((result) =>
            result.error ? alert('Nao achado') : setDrinks(result),
          );
          break;
        default:
          getAllDrinks(query.text).then((result) => setDrinks(result));
          break;
      }
    } else {
      getAllDrinks().then((result) => setDrinks(result.drinks));
    }
  };

  return [drinks, getDrinks];
};

export default useDrinks;
