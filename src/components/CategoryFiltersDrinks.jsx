import React, { useState, useEffect } from 'react';
import { getCategoriesDrinks } from '../services/api';
import useDrinks from '../hooks/useDrinks';

export default function CategoryFiltersDrinks() {
  const [categories, setCategories] = useState([]);
  const [, [toggleFilter]] = useDrinks();

  useEffect(() => {
    getCategoriesDrinks().then((response) => setCategories(response.drinks));
  }, []);

  return (
    <div className="row justify-content-center mb-3">
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
        data-testid="All-category-filter"
        onClick={() => toggleFilter('All')}
      >
        All
      </button>
      {categories.slice(0, 5).map(({ strCategory }) => (
        <button
          className="btn btn-primary btn-sm m-1 w-25"
          key={strCategory}
          type="button"
          data-testid={`${strCategory}-category-filter`}
          onClick={() => toggleFilter(strCategory)}
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
}
