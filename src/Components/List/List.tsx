import './List.scss';
import SearchBar from '../SearchBar/SearchBar';
import Dapplet from '../Dapplets/Dapplet';
import { useState, useEffect } from 'react';
import { DappletPropsInterface } from '../Dapplets/Dapplet';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';

interface ListPropsInterface {
  statusChanger(message: string): void;
}

const List = (props: ListPropsInterface) => {
  const [listsData, setListsData] = useState<DappletPropsInterface[]>([]);
  const [neededStart, setNeededStart] = useState<number>(0);

  const fetchData = async () => {
    const response = await fetch('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=0');
    if (response.status !== 200) {
      throw new Error('Could not fetch the lists');
    }
    const data = await response.json();
    const list: DappletPropsInterface[] = data.data;
    setNeededStart(20);
    return list;
  }
  const loadData = async () => {
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
    fetchData()
      .then((list) => {
        setListsData(list);
    }).catch((e: Error) => props.statusChanger(e.message));
  }, [props])
  return (
    <div className="list">
      <SearchBar />
      <InfiniteScroll
      next={loadData}
      hasMore={true}
      loader={<div className="list__loader-container"><Loader type="ThreeDots" color="#0085FF" height="100" width="100" /></div>}
      dataLength={listsData.length}>
      {listsData && listsData.map((list) => {
        return (
          <Dapplet id={list.id}
          key={list.id}
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