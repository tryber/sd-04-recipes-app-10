import React from 'react';
import HeaderDrinks from '../components/HeaderDrinks';
import Footer from '../components/Footer';

export default function ExploreAreaDrinks() {
  return (
    <React.Fragment>
      <HeaderDrinks title="Explorar Origem" isSearcheable />
      <Footer />
    </React.Fragment>
  );
}
