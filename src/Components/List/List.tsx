import './List.scss';
import SearchBar from '../SearchBar/SearchBar';
import Dapplet from '../Dapplets/Dapplets';

const List = () => {
  return (
    <div className="list">
      <SearchBar/>
      <Dapplet/>
    </div>
  )
}

export default List;