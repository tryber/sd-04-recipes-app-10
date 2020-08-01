import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllMeals } from '../services/api';

export const MeatContext = createContext();

export default function MeatsProvider({ children }) {
  const [meats, setMeats] = useState([]);

  useEffect(() => {
    getAllMeals().then((result) => setMeats(result));
  }, []);

  return <MeatContext.Provider value={[meats, setMeats]}>{children}</MeatContext.Provider>;
}

MeatsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
