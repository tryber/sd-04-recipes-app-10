import React from 'react';
import HeaderDrinks from '../components/HeaderDrinks';
import Footer from '../components/Footer';

export default function ExploreAreaDrinks() {
  return (
    <React.Fragment>
      <HeaderDrinks title="Not Found" isSearcheable />
      <h3 className="mt-5">Not Found</h3>
      <Footer />
    </React.Fragment>
  );
}
