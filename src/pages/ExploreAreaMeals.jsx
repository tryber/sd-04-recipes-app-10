import React from 'react';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';

export default function ExploreAreaMeals() {
  return (
    <React.Fragment>
      <HeaderMeals title="Explorar Origem" isSearcheable />
      <Footer />
    </React.Fragment>
  );
}