import { Link } from 'react-router-dom';
import React from 'react';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';

export default function Explore() {
  return (
    <React.Fragment>
      <HeaderMeals title="Explorar" />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 mt-5 pt-5">
          <Link to="/explorar/comidas" >
            <button
              data-testid="explore-food"
              className="btn btn-secondary btn-block btn-lg"
              type="button"
            >
              Explorar Comidas
            </button>
          </Link>
          <Link to="/explorar/bebidas">
            <button
              data-testid="explore-drinks"
              className="btn btn-secondary btn-block btn-lg"
              type="button"
            >
              Explorar Bebidas
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
