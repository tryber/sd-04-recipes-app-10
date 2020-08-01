import React from 'react';

// import CategoryFilters from '../components/CategoryFilters';
import ListMeals from '../components/ListMeals';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomeMeals() {
  return (
    <>
      <Header title="Comidas" isSearcheable />
      <div className="my-5">
        <ListMeals />
      </div>
      <Footer />
    </>
  );
}
