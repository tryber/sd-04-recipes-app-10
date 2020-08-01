import React from 'react';
import ListDrinks from '../components/ListDrinks';
import Footer from '../components/Footer';
import HeaderDrinks from '../components/HeaderDrinks';

export default function HomeDrinks() {
  return (
    <>
      <HeaderDrinks title="Bebidas" isSearcheable />
      <div className="my-5">
        <ListDrinks />
      </div>
      <Footer />
    </>
  );
}
