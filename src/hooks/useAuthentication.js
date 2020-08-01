import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

const useAuthentication = () => {
  const [[user, setUser]] = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  }, [user]);

  const login = (email) => {
    setUser({ ...user, email });
  };

  return [user, login];
};

export default useAuthentication;
