import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export default function UsersProvider({ children }) {
  const [user, setUser] = useState(() => {
    const userStoraged = localStorage.getItem('user');
    if (userStoraged) return JSON.parse(userStoraged);
    return {};
  });

  const [doneRecipes, setDoneRecipes] = useState(() => {
    const doneRecipesStoraged = localStorage.getItem('doneRecipes');
    if (doneRecipesStoraged) return JSON.parse(doneRecipesStoraged);
    return [];
  });

  const [favoriteRecipes, setFavoriteRecipes] = useState(() => {
    const favoriteRecipesStoraged = localStorage.getItem('favoriteRecipes');
    if (favoriteRecipesStoraged) return JSON.parse(favoriteRecipesStoraged);
    return [];
  });

  const [inProgressRecipes, setInProgressRecipes] = useState(() => {
    const inProgressRecipesStoraged = localStorage.getItem('inProgressRecipes');
    if (inProgressRecipesStoraged) return JSON.parse(inProgressRecipesStoraged);
    return [];
  });

  const context = [
    [user, setUser],
    [doneRecipes, setDoneRecipes],
    [favoriteRecipes, setFavoriteRecipes],
    [inProgressRecipes, setInProgressRecipes],
  ];

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
