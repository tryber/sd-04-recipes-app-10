import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const MeatContext = createContext();

export default function MeatsProvider({ children }) {
  return <MeatContext.Provider value={[]}>{children}</MeatContext.Provider>;
}

MeatsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
