import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export default function UsersProvider({ children }) {
  return <UserContext.Provider value={[]}>{children}</UserContext.Provider>;
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
