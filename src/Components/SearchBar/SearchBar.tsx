import './SearchBar.scss';
import React, { useState } from 'react';
import searchIcon from '../../assets/ph_magnifying-glass-bold.png';
import arrow from '../../assets/arrow.png';

interface SearchBarPropsInterface {
  // eslint-disable-next-line no-unused-vars
  setSearchInputValue(e: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchBar = (props: SearchBarPropsInterface) => {
  const [desceningSort, setDescendingSort] = useState<boolean>(true);
  const { setSearchInputValue } = props;
  return (
    <div className="search-bar">
      <div className="search-bar__input-container">
        <input
          type="text"
          placeholder="Search"
          className="search-bar__input"
          onChange={setSearchInputValue}
        />
        <img src={searchIcon} alt="" className="search-bar__icon" height="16" width="16" />
      </div>
      <div className="search-bar__sorting">
        <div className="search-bar__release-date-container">
          <select className="search-bar__release-date" defaultValue="0">
            <option value="0">Release date</option>
          </select>
          <img src={arrow} alt="" className="search-bar__arrow-icon" height="8" width="14" />
        </div>
        <div className="search-bar__sorting-container">
          <button
            type="button"
            onClick={() => setDescendingSort(!desceningSort)}
            className="search-bar__sorting-button"
          >
            {desceningSort ? 'Descending' : 'Ascending'}
          </button>
          <img
            src={arrow}
            alt=""
            className={`search-bar__arrow-icon ${desceningSort ? '' : 'search-bar__arrow-icon-up'}`}
            height="8"
            width="14"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
