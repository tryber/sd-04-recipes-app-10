import React from 'react';
import ListDrinks from '../components/ListDrinks';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomeDrinks() {
  return (
    <>
      <Header title="Bebidas" isSearcheable />
      <div className="my-5">
        <ListDrinks />
      </div>
      <Footer />
    </>
  );
}
