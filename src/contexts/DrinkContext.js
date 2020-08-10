import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DrinkContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [filters, setFilters] = useState({ on: false, by: 'All' });

  return (
    <DrinkContext.Provider value={[drinks, setDrinks, filters, setFilters]}>
      {children}
    </DrinkContext.Provider>
  );
};

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
