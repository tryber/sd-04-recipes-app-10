import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="d-flex bg-light align-items-center justify-content-between">
      <Link to="/bebidas"><img src={drinkIcon} alt="Icon Drink" /></Link>
      <Link to="/explorar"><img src={exploreIcon} alt="Icon Explore" /></Link>
      <Link to="/comidas"><img src={mealIcon} alt="Icon Meal" /></Link>
    </footer>
  );
}

export default Footer;
