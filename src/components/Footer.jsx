import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
    return (
        <footer>
            <Link to='/bebidas'>{drinkIcon}</Link>
            <Link to='/explorar'>{exploreIcon}</Link>
            <Link to='/comidas'>{mealIcon}</Link>
        </footer>
    )
}

export default Footer;
