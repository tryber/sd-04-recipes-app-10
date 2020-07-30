import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const DrinkContext = createContext();

export default function DrinksProvider({ children }) {
  return <DrinkContext.Provider value={[]}>{children}</DrinkContext.Provider>;
}

DrinksProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
