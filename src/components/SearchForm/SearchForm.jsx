import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { Searchbar } from './SearchForm.styled';
import { Notify } from 'notiflix';

const SearchForm = ({ onSubmit, message }) => {
  const [inputQuery, setInputQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  useEffect(() => {
    setSearchMessage(message);
  }, [message]);

  const handleSearch = event => {
    setInputQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputQuery.trim() === '') {
      Notify.warning(`Enter something`);
      setSearchMessage(`Enter something`);
      return;
    }
    onSubmit(inputQuery.trim());
    setInputQuery('');
  };

  return (
    <Searchbar>
      <form className="searchbar-form" onSubmit={handleSubmit}>
        <button type="submit" className="searchbar-button">
          <SearchIcon width="35" height="35" />
        </button>

        <input
          className="searchbar-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies by name"
          value={inputQuery}
          onChange={handleSearch}
        />
      </form>
      <div>
        <p className="message">{searchMessage}</p>
      </div>
    </Searchbar>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default SearchForm;
