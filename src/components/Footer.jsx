import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="d-flex p-2 bg-light align-items-center justify-content-between fixed-bottom"
    >
      <Link to="/bebidas">
        <img src={drinkIcon} alt="Icon Drink" data-testid="drinks-bottom-btn" />
      </Link>
      <Link to="/explorar">
        <img src={exploreIcon} alt="Icon Explore" data-testid="explore-bottom-btn" />
      </Link>
      <Link to="/comidas">
        <img src={mealIcon} alt="Icon Meal" data-testid="food-bottom-btn" />
      </Link>
    </footer>
  );
}

export default Footer;
