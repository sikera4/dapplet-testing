import './List.scss';
import SearchBar from '../SearchBar/SearchBar';
import Dapplet from '../Dapplets/Dapplet';
import { useState, useEffect } from 'react';
import { DappletPropsInterface } from '../Dapplets/Dapplet';
import useDebounce from '../../Hooks/DebounceHook';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';

interface ListPropsInterface {
  statusChanger(message: string): void;
}

const List = (props: ListPropsInterface) => {
  const [listsData, setListsData] = useState<DappletPropsInterface[]>([]);
  const [neededStart, setNeededStart] = useState<number>(20);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [outFilteredDapplets, setOutFilteredDapplets] = useState<number>(0);
  const debouncedSearchValue = useDebounce(searchInputValue, 500);

  const setSearchValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  }

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newList: DappletPropsInterface[] = Array.from(listsData);
    const [reorderedItem] = newList.splice(result.source.index, 1);
    newList.splice(result.destination!.index, 0, reorderedItem);
    setListsData(newList);
  }

  const fetchData = async (debouncedSearchValue: string) => {
    let address = 'https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=0';
    if (debouncedSearchValue) {
      let filterProps: string = '&filter=' + JSON.stringify([{property: 'title', value: debouncedSearchValue},
    {property: 'description', value: debouncedSearchValue}]);
      address += filterProps;
    }
    const response = await fetch(address);
    if (response.status !== 200) {
      throw new Error('Could not fetch the lists');
    }
    setNeededStart(20);
    setHasMore(true);
    const data = await response.json();
    const lists: DappletPropsInterface[] = data.data;
    return lists;
  }

  const loadMoreData = async (limit: number) => {
    let address: string = `https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=${limit}&start=${neededStart}`;
    if (debouncedSearchValue) {
      let filterProps: string = '&filter=' + JSON.stringify([{property: 'title', value: debouncedSearchValue},
      {property: 'description', value: debouncedSearchValue}]);
      address += filterProps;
    }
    const response = await fetch(address);
    if (response.status !== 200) {
      throw new Error('Could not load more data');
    }
    const newData = await response.json();
    const newList: DappletPropsInterface[] = newData.data;
    if (newList.length === 0) setHasMore(false);
    setListsData(listsData.concat(newList));
    setNeededStart(neededStart + 20);
  }

  const moreDataLoader = () => {
    let neededLimit: number = (outFilteredDapplets) ? outFilteredDapplets : 20;
    loadMoreData(neededLimit).catch((e: Error) => props.statusChanger(e.message));
  }
  
  useEffect(() => {
    if (debouncedSearchValue) {
      fetchData(debouncedSearchValue).then((lists) => {
        let newLists: DappletPropsInterface[] = lists.filter((list) => 
        list.title.toLowerCase().includes(debouncedSearchValue.toLowerCase()) || 
        list.description.toLowerCase().includes(debouncedSearchValue.toLowerCase()));
        setListsData(newLists);
        setOutFilteredDapplets(lists.length - newLists.length);
        if (outFilteredDapplets) moreDataLoader();
        setOutFilteredDapplets(0);
        if (newLists.length === 0) setHasMore(false);
        props.statusChanger('Active');
      }).catch((e: Error) => props.statusChanger(e.message))
    } else {
      fetchData('')
        .then((list) => {
          setListsData(list);
      }).catch((e: Error) => props.statusChanger(e.message));
    }
  }, [debouncedSearchValue, props]);
  
  return (
    <div className="list">
      <SearchBar setSearchInputValue={setSearchValue}/>
      <InfiniteScroll
      next={moreDataLoader}
      hasMore={hasMore}
      loader={<div className="list__loader-container">
        <p className="list__loader-caption">Loading more Dapplets</p>
        <Loader type="ThreeDots" color="#0085FF" height="100" width="100" />
        </div>}
      endMessage={<h2 className="list__end-message">
      <b>There seems to be nothing else...</b>
    </h2>}
      dataLength={listsData.length}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="dapplets">
            {(provided) => (
            <ul className="list__dapplets" {...provided.droppableProps} ref={provided.innerRef}>
              {listsData && listsData.map((list, index) => {
                return (
                  <Draggable key={list.id} draggableId={list.id} index={index}>
                    {(provided) => (
                      <li className="list__dapplet" ref={provided.innerRef} {...provided.draggableProps}>
                        <div className="list__dapplet-drag-handle-container" {...provided.dragHandleProps}>
                          <div className="list__dapplet-drag-handle"></div>
                        </div>
                        <Dapplet 
                          id={list.id}
                          author={list.author} 
                          description={list.description}
                          icon={list.icon}
                          title={list.title}
                          address={list.address}
                          text_1={list.text_1}
                          text_2={list.text_2}
                          text_3={list.text_3}
                          text_4={list.text_4}
                          text_5={list.text_5}
                          text_6={list.text_6}
                          text_7={list.text_7}
                          text_8={list.text_8}
                          text_9={list.text_9}/>
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
            )}
          </Droppable>
        </DragDropContext>
      </InfiniteScroll>
    </div>
  )
}

export default List;