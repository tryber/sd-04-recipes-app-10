import React from 'react';
import PropTypes from 'prop-types';

const ButtonToggle = ({ setFilter }) => (
  <div className="row justify-content-center mb-2 mt-5">
    <button
      type="button"
      className="btn btn-primary btn-sm m-1 w-25"
      data-testid="filter-by-all-btn"
      onClick={() => setFilter('All')}
    >
      All
    </button>
    <button
      type="button"
      className="btn btn-primary btn-sm m-1 w-25"
      data-testid="filter-by-food-btn"
      onClick={() => setFilter('comida')}
    >
      Food
    </button>
    <button
      type="button"
      className="btn btn-primary btn-sm m-1 w-25"
      data-testid="filter-by-drink-btn"
      onClick={() => setFilter('bebida')}
    >
      Drinks
    </button>
  </div>
);

ButtonToggle.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default ButtonToggle;
