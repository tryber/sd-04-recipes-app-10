import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import useMeals from '../hooks/useMeats';

const SearchBar = () => {
  const history = useHistory();
  const [, getMeals] = useMeals();

  const [query, setQuery] = useState({
    text: '',
    searchBy: '',
  });

  const handleSearch = () => {
    if (query.searchBy === 'firstLetter' && query.text.length !== 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }

    const redirectByResult = ({ meals }) => {
      if (!meals) {
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        return;
      }
      if (meals.length === 1) {
        history.push(`/comidas/${meals[0].idMeal}`);
      }
    };

    getMeals(query, redirectByResult);
  };

  return (
    <div style={{ top: '50px' }} className="fixed-top bg-light p-3">
      <input
        type="text"
        value={query.text}
        onChange={(e) => setQuery({ ...query, text: e.target.value })}
        className="form-control"
        placeholder="Buscar receita"
        data-testid="search-input"
      />
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="search"
          id="ingredient"
          checked={query.searchBy === 'ingredient'}
          onChange={() => setQuery({ ...query, searchBy: 'ingredient' })}
          data-testid="ingredient-search-radio"
        />
        <label className="form-check-label" htmlFor="ingredient">
          Ingrediente
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="search"
          id="name"
          checked={query.searchBy === 'name'}
          onChange={() => setQuery({ ...query, searchBy: 'name' })}
          data-testid="name-search-radio"
        />
        <label className="form-check-label" htmlFor="name">
          Nome
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="search"
          id="firstLetter"
          checked={query.searchBy === 'firstLetter'}
          onChange={() => setQuery({ ...query, searchBy: 'firstLetter' })}
          data-testid="first-letter-search-radio"
        />
        <label className="form-check-label" htmlFor="firstLetter">
          Primeira letra
        </label>
      </div>
      <button
        onClick={handleSearch}
        data-testid="exec-search-btn"
        type="button"
        className="btn btn-block btn-primary"
      >
        Buscar
      </button>
    </div>
  );
};

export default function HeaderMeals({ title, isSearcheable = false }) {
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  return (
    <React.Fragment>
      <header className="d-flex p-2 bg-light align-items-center justify-content-between fixed-top">
        <Link to="/perfil">
          <img src={profileIcon} alt="" data-testid="profile-top-btn" />
        </Link>
        <h2 className="mb-0" data-testid="page-title">
          {title}
        </h2>
        {isSearcheable && (
          <button
            onClick={() => setSearchBarOpen(!isSearchBarOpen)}
            className="border-0 bg-transparent p-0"
          >
            <img src={searchIcon} alt="" data-testid="search-top-btn" />
          </button>
        )}
      </header>
      {isSearchBarOpen && <SearchBar />}
    </React.Fragment>
  );
}

HeaderMeals.defaultProps = {
  isSearcheable: false,
};

HeaderMeals.propTypes = {
  title: PropTypes.string.isRequired,
  isSearcheable: PropTypes.bool,
};
