import { useContext, useEffect, useCallback } from 'react';
import { MeatContext } from '../contexts/MeatContext';
import {
  getAllMeals,
  getMealsByFirstLetter,
  getMealsByIngredient,
  getMealsByName,
  getMealsByCategory,
  getMealsByArea,
} from '../services/api';

const useMeals = () => {
  const [meals, setMeals, filtersMeals, setFiltersMeals] = useContext(MeatContext);

  const toggleFilters = (filter = null) =>
    setFiltersMeals({ on: filtersMeals.by === filter ? !filtersMeals.on : true, by: filter });

  const filter = useCallback(
    (category) => {
      if (category === 'All') {
        getAllMeals().then((result) => setMeals(result));
      } else {
        getMealsByCategory(category).then((result) => setMeals(result));
      }
    },
    [setMeals],
  );

  useEffect(() => {
    if (filtersMeals.on) {
      filter(filtersMeals.by);
    } else {
      getAllMeals().then((result) => setMeals(result));
    }
  }, [filtersMeals, filter, setMeals]);

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
        case 'area':
          getMealsByArea(query.text).then((result) => {
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

  return [[meals, getMeals], [toggleFilters]];
};

export default useMeals;
