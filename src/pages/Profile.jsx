import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';
import useAuthentication from '../hooks/useAuthentication';

function createButton(name, link, testid) {
  return (
    <div className="row justify-content-center py-3">
      <Link
        to={link}
        className="btn btn-secondary btn-lg btn-block justify-content-center"
        data-testid={`profile-${testid}-btn`} 
      >
        {name}
      </Link>
    </div>
  );
}

export default function Profile() {
  const [user] = useAuthentication();
  return (
    <React.Fragment>
      <HeaderMeals title="Perfil" />
      <div className="col mt-5 py-">
        <div className="row justify-content-center py-3">
          <h5 data-testid="profile-email">{user.email}</h5>
        </div>
        {createButton('Receitas Feitas', 'receitas-feitas', 'done')}
        {createButton('Receitas Favoritas', 'receitas-favoritas', 'favorite')}
        {createButton('Sair', '/', 'logout')}
      </div>
      <Footer />
    </React.Fragment>
  );
}
