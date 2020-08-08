import React from 'react';

import HeaderDrinks from '../components/HeaderDrinks';
import Footer from '../components/Footer';

const NotFound = () => (
  <React.Fragment>
    <HeaderDrinks title="Not Found" isSearcheable />
    <h3 className="mt-5">Not Found</h3>
    <Footer />
  </React.Fragment>
);

export default NotFound;
