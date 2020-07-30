import React, { createContext } from 'react';

export const UserContext = createContext();


export default function UsersProvider({ children }) {
  return <UserContext.Provider value={[]}>{children}</UserContext.Provider>;
}
