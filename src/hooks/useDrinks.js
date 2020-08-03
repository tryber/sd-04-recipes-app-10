import { useContext, useEffect, useCallback } from 'react';
import { DrinkContext } from '../contexts/DrinkContext';
import {
  getAllDrinks,
  getDrinksByFirstLetter,
  getDrinksByIngredient,
  getDrinksByName,
  getDrinksByCategory,
} from '../services/api';

const useDrinks = () => {
  const [drinks, setDrinks, filtersDrinks, setFiltersDrinks] = useContext(DrinkContext);

  const toggleFilters = (filter = null) =>
    setFiltersDrinks({ on: filtersDrinks.by === filter ? !filtersDrinks.on : true, by: filter });

  const filter = useCallback(
    (category) => {
      if (category === 'All') {
        getAllDrinks().then((result) => setDrinks(result));
      } else {
        getDrinksByCategory(category).then((result) => setDrinks(result));
      }
    },
    [setDrinks],
  );

  useEffect(() => {
    if (filtersDrinks.on) {
      filter(filtersDrinks.by);
    } else {
      getAllDrinks().then((result) => setDrinks(result));
    }
  }, [filtersDrinks, filter, setDrinks]);

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

  return [[drinks, getDrinks], [toggleFilters]];
};

export default useDrinks;
