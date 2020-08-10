import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

const useAuthentication = () => {
  const [[user, setUser]] = useContext(UserContext);

  useEffect(() => {
    if (user.email) {
      console.log(JSON.stringify(user));
      localStorage.setItem(
        'user',
        JSON.stringify(user, null, 1).split('\n').join(' ').replace(' ', ''),
      );
      localStorage.setItem('mealsToken', 1);
      localStorage.setItem('cocktailsToken', 1);
    }
  }, [user]);

  const login = (email) => {
    setUser({ ...user, email });
  };

  const logout = () => {
    setUser({});
    localStorage.clear();
  };

  return [user, login, logout];
};

export default useAuthentication;
