import React from 'react';
import ListDrinks from '../components/ListDrinks';
import Footer from '../components/Footer';
import HeaderDrinks from '../components/HeaderDrinks';
import CategoryFiltersDrinks from '../components/CategoryFiltersDrinks';

export default function HomeDrinks() {
  return (
    <React.Fragment>
      <HeaderDrinks title="Bebidas" isSearcheable />
      <div className="my-5 py-2">
        <CategoryFiltersDrinks />
        <ListDrinks />
      </div>
      <Footer />
    </React.Fragment>
  );
}
