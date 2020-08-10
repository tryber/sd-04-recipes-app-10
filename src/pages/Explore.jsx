import React from 'react';
import { Link } from 'react-router-dom';

import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';

const Explore = () => (
  <React.Fragment>
    <HeaderMeals title="Explorar" />
    <div className="row h-100 justify-content-center align-items-center">
      <div className="col">
        <Link
          to="/explorar/comidas"
          data-testid="explore-food"
          className="btn btn-secondary btn-block btn-lg"
        >
          Explorar Comidas
        </Link>
        <Link
          to="/explorar/bebidas"
          data-testid="explore-drinks"
          className="btn btn-secondary btn-block btn-lg"
        >
          Explorar Bebidas
        </Link>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default Explore;
