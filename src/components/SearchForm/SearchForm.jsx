import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { SearchbarForm } from './SearchForm.styled';
import { Notify } from 'notiflix';

const SearchForm = ({ onSubmit }) => {
  const [inputQuery, setInputQuery] = useState('');

  const handleSearch = event => {
    setInputQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputQuery === '') {
      Notify.warning(`Enter something`);
      return;
    }
    onSubmit(inputQuery);
    setInputQuery('');
  };

  return (
    <SearchbarForm onSubmit={handleSubmit}>
      <button type="submit" className="searchbar-button">
        <SearchIcon width="35" height="35" />
      </button>

      <input
        className="searchbar-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={inputQuery}
        onChange={handleSearch}
      />
    </SearchbarForm>
  );
};

export default SearchForm;
