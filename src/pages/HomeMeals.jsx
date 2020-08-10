import React from 'react';

import ListMeals from '../components/ListMeals';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';
import CategoryFiltersMeals from '../components/CategoryFiltersMeals';

const HomeMeals = () => (
  <React.Fragment>
    <HeaderMeals title="Comidas" isSearcheable />
    <div className="my-5 py-2">
      <CategoryFiltersMeals />
      <ListMeals />
    </div>
    <Footer />
  </React.Fragment>
);

export default HomeMeals;
