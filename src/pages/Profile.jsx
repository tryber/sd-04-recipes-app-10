import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';
import useAuthentication from '../hooks/useAuthentication';

export default function Profile() {
  const [user] = useAuthentication();
  return (
    <React.Fragment>
      <HeaderMeals title="Perfil" />
      <div className="col mt-5 py-">
        <div className="row justify-content-center py-3">
          <h5 className="">{user.email}</h5>
        </div>
        <div className="row justify-content-center py-3">
          <Link
            to="/"
            className="btn btn-secondary btn-lg btn-block justify-content-center"
          >
            Receitas Feitas
          </Link>
        </div>
        <div className="row justify-content-center py-3">
        <Link
            to="/"
            className="btn btn-secondary btn-lg btn-block justify-content-center"
          >
            Receitas Favoritas
          </Link>
        </div>
        <div className="row justify-content-center py-3">
        <Link
            to="/"
            className="btn btn-secondary btn-lg btn-block justify-content-center"
          >
            Sair
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
