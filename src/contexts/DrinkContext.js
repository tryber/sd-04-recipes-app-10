import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DrinkContext = createContext();

export default function DrinksProvider({ children }) {
  const [drinks, setDrinks] = useState([]);

  return <DrinkContext.Provider value={[drinks, setDrinks]}>{children}</DrinkContext.Provider>;
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
