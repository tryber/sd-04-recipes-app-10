import React, { createContext } from 'react';

export const DrinkContext = createContext();


export default function DrinksProvider({ children }) {
  return <DrinkContext.Provider value={[]}>{children}</DrinkContext.Provider>;
}
