import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MeatContext = createContext();

const MeatsProvider = ({ children }) => {
  const [meats, setMeats] = useState([]);
  const [filters, setFilters] = useState({ on: false, by: 'All' });

  return (
    <MeatContext.Provider value={[meats, setMeats, filters, setFilters]}>
      {children}
    </MeatContext.Provider>
  );
};

MeatsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MeatsProvider;
