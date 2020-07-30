import React, { createContext } from 'react';

export const MeatContext = createContext();


export default function MeatsProvider({ children }) {
  return <MeatContext.Provider value={[]}>{children}</MeatContext.Provider>;
}
