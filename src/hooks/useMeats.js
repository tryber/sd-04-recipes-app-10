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

  const turnOffFilter = () => {
    setFiltersMeals({ ...filtersMeals, off: true });
  };

  const filter = useCallback(
    (category) => {
      if (category === 'All') {
        getAllMeals().then((result) => setMeals(result.meals));
      } else {
        getMealsByCategory(category).then((result) => setMeals(result.meals));
      }
    },
    [setMeals],
  );

  useEffect(() => {
    if (filtersMeals.on) {
      filter(filtersMeals.by);
    } else if(!filtersMeals.off){
      getAllMeals().then((result) => setMeals(result.meals));
    }
  }, [filtersMeals, filter, setMeals]);

  const getMeals = (query = null, callback) => {
    if (query) {
      switch (query.searchBy) {
        case 'ingredient':
          getMealsByIngredient(query.text).then((result) => {
            callback(result);
            setMeals(result.meals);
          });
          break;
        case 'name':
          getMealsByName(query.text).then((result) => {
            callback(result);
            setMeals(result.meals);
          });
          break;
        case 'firstLetter':
          getMealsByFirstLetter(query.text).then((result) => {
            callback(result);
            setMeals(result.meals);
          });
          break;
        case 'area':
          if (query.text === 'All') {
            getAllMeals().then((result) => {
              callback(result);
              setMeals(result.meals);
            });
          } else {
            getMealsByArea(query.text).then((result) => {
              callback(result);
              setMeals(result.meals);
            });
          }
          break;
        default:
          getAllMeals(query.text).then((result) => {
            callback(result);
            setMeals(result.meals);
          });
          break;
      }
    } else {
      getAllMeals().then((result) => {
        callback(result);
        setMeals(result.meals);
      });
    }
  };
  return [[meals, getMeals], [toggleFilters, turnOffFilter]];
};

export default useMeals;
