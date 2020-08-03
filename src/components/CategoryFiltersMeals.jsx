import React, { useState, useEffect } from 'react';
import { getCategoriesMeals } from '../services/api';

export default function CategoryFiltersMeals() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesMeals().then((response) => setCategories(response.meals));
  }, []);

  return (
    <div className="row justify-content-center mb-2">
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
        data-testid="All-category-filter"
      >
        All
      </button>
      {categories.slice(0, 5).map(({ strCategory }) => (
        <button
          key={strCategory}
          className="btn btn-primary btn-sm m-1 w-25"
          type="button"
          data-testid={`${strCategory}-category-filter`}
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
}
