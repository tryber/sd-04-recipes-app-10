import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllDrinks } from '../services/api';

export const DrinkContext = createContext();

export default function DrinksProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [filters, setFilters] = useState({ on: false, by: 'All' });

  useEffect(() => {
    getAllDrinks().then((result) => setDrinks(result));
  }, []);

  return (
    <DrinkContext.Provider value={[drinks, setDrinks, filters, setFilters]}>
      {children}
    </DrinkContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
