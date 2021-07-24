import './SearchBar.scss';
import searchIcon from '../../assets/ph_magnifying-glass-bold.png';
import arrow from '../../assets/arrow.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__input-container">
        <input type="text" placeholder="Search" className="search-bar__input" />
        <img src={searchIcon} alt="" className="search-bar__icon" height="16" width="16" />
      </div>
      <div className="search-bar__release-date-container">
        <select className="search-bar__release-date" defaultValue="0">
          <option value="0">Release date</option>
        </select>
        <img src={arrow} alt="" className="search-bar__arrow-icon" height="8" width="14"/>
      </div>
      <div className="search-bar__sorting-container">
        <select className="search-bar__sorting" defaultValue="0">
          <option value="0">Descending</option>
        </select>
        <img src={arrow} alt="" className="search-bar__arrow-icon" height="8" width="14"/>
      </div>
    </div>
  )
}

export default SearchBar;