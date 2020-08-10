import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';

import useAuthentication from '../hooks/useAuthentication';

const createButton = (name, link, testid) => (
  <Link
    to={link}
    className="btn btn-secondary btn-lg btn-block"
    data-testid={`profile-${testid}-btn`}
  >
    {name}
  </Link>
);

const Profile = () => {
  const history = useHistory();
  const [user, , logout] = useAuthentication();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <React.Fragment>
      <HeaderMeals title="Perfil" />
      <div className="col mt-5 h-100">
        <div className="row justify-content-center py-3">
          <h5 data-testid="profile-email">{user.email}</h5>
        </div>
        <div className="row align-items-center h-50">
          <div className="col">
            {createButton('Receitas Feitas', 'receitas-feitas', 'done')}
            {createButton(
              'Receitas Favoritas',
              'receitas-favoritas',
              'favorite',
            )}
            <button
              data-testid="profile-logout-btn"
              className="btn btn-secondary btn-lg btn-block"
              onClick={handleLogout}
            >
              Sair
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
