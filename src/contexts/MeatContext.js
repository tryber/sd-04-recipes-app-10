import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MeatContext = createContext();

export default function MeatsProvider({ children }) {
  const [meats, setMeats] = useState([]);

  return <MeatContext.Provider value={[meats, setMeats]}>{children}</MeatContext.Provider>;
}

MeatsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
