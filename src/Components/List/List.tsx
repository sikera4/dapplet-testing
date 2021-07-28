import './List.scss';
import SearchBar from '../SearchBar/SearchBar';
import Dapplet from '../Dapplets/Dapplet';
import { useState, useEffect } from 'react';
import { DappletPropsInterface } from '../Dapplets/Dapplet';
import useDebounce from '../../Hooks/DebounceHook';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';

interface ListPropsInterface {
  statusChanger(message: string): void;
}

const List = (props: ListPropsInterface) => {
  const [listsData, setListsData] = useState<DappletPropsInterface[]>([]);
  const [neededStart, setNeededStart] = useState<number>(20);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchInputValue, 500);
  const setSearchValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  }

  const fetchData = async (debouncedSearchValue: string) => {
    let response = await fetch(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=0`);
    let filter: object[] = [];
    if (debouncedSearchValue) {
      filter = [{property: 'title', value: debouncedSearchValue},
    {property: 'description', value: debouncedSearchValue}];
      response = await fetch(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=0&filter=${JSON.stringify(filter)}`);
    }
    if (response.status !== 200) {
      throw new Error('Could not fetch the lists');
    }
    setNeededStart(20);
    const data = await response.json();
    const lists: DappletPropsInterface[] = data.data;
    return lists;
  }

  const loadMoreData = async () => {
    const response = await fetch(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=${neededStart}`);
    if (response.status !== 200) {
      throw new Error('Could not fetch the lists');
    }
    const newData = await response.json();
    const newList: DappletPropsInterface[] = newData.data;
    setListsData(listsData.concat(newList));
    setNeededStart(neededStart + 20);
  }

  useEffect(() => {
    if (debouncedSearchValue) {
      fetchData(debouncedSearchValue).then((lists) => {
        lists = lists.filter((list) => list.title.includes(debouncedSearchValue) || list.description.includes(debouncedSearchValue));
        setListsData(lists);
        props.statusChanger('Active');
      }).catch((e: Error) => props.statusChanger(e.message))
    } else {
      fetchData('')
      .then((list) => {
        setListsData(list);
    }).catch((e: Error) => props.statusChanger(e.message));
    }
  }, [debouncedSearchValue, props])
  
  return (
    <div className="list">
      <SearchBar setSearchInputValue={setSearchValue}/>
      <InfiniteScroll
      next={loadMoreData}
      hasMore={true}
      loader={<div className="list__loader-container"><Loader type="ThreeDots" color="#0085FF" height="100" width="100" /></div>}
      dataLength={listsData.length}>
      {listsData && listsData.map((list) => {
        return (
          <Dapplet key={list.id}
          author={list.author} 
          description={list.description}
          icon={list.icon}
          title={list.title}
          address={list.address}/>
        )
      })}
      </InfiniteScroll>
    </div>
  )
}

export default List;