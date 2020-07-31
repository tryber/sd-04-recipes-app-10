import React, { useState } from 'react';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState({
    text: '',
    searchBy: '',
  });

  return (
    <div>
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
      <button data-testid="exec-search-btn" type="button" className="btn btn-block btn-primary">
        Buscar
      </button>
    </div>
  );
};

export default function Header({ title }) {
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);

  return (
    <>
      <div className="d-flex bg-light align-items-center justify-content-between">
        <Link to="/profile" data-testid="profile-top-btn">
          <img src={profileIcon} alt="" />
        </Link>
        <h2 className="mb-0" data-testid="page-title">
          {title}
        </h2>
        <button
          onClick={() => setSearchBarOpen(!isSearchBarOpen)}
          className="border-0 bg-transparent p-0"
          data-testid="search-top-btn"
        >
          <img src={searchIcon} alt="" />
        </button>
      </div>
      {isSearchBarOpen && <SearchBar />}
    </>
  );
}
