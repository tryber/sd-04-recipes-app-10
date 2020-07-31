import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const useAuthentication = () => {
  const [[user, setUser]] = useContext(UserContext);

  const login = (email) => {
    setUser({ ...user, email });
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  };

  return [user, login];
};

export default useAuthentication;
