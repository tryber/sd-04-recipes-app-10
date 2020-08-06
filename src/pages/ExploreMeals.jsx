import { Link } from 'react-router-dom';
import React from 'react';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';

export default function ExploreMeals() {
  return (
    <React.Fragment>
      <HeaderMeals title="Explorar Comidas" />
        <div className="row justify-content-center align-items-center">
          <div className="col-12 mt-5 pt-5"> 
            <Link to="/">
              <button
                data-testid="explore-by-ingredient"
                className="btn btn-secondary btn-block btn-lg"
                type="button"
              >
              Por Ingredientes
              </button>
            </Link>
            <Link to="/">
              <button
                data-testid="explore-by-area"
                className="btn btn-secondary btn-block btn-lg"
                type="button"
              >
              Por Local de Origem
              </button>
            </Link>
            <Link to="/">
              <button
                data-testid="explore-surprise"
                className="btn btn-secondary btn-block btn-lg"
                type="button"
              >
              Me Surpreenda!
              </button>
            </Link>
          </div>
        </div>
      <Footer />
    </React.Fragment>
  );
}
