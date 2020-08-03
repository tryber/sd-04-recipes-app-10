import React from 'react';

// import CategoryFilters from '../components/CategoryFilters';
import ListMeals from '../components/ListMeals';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';

export default function HomeMeals() {
  return (
    <React.Fragment>
      <HeaderMeals title="Comidas" isSearcheable />
      <div className="my-5">
        <ListMeals />
      </div>
      <Footer />
    </React.Fragment>
  );
}
