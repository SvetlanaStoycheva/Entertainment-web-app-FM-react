import React, { useState, useContext, useEffect } from 'react';
import data from './data';

//get data from LocalStorage
const getLocalStorage = () => {
  let dataItems = localStorage.getItem('dataItems');
  if (dataItems) {
    return JSON.parse(localStorage.getItem('dataItems'));
  } else {
    return data;
  }
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [dataItems, setDataItems] = useState(getLocalStorage);

  //when bookmarked Icon is clicked in Recommended
  const toggleBookmarked = (e) => {
    const title = e.currentTarget.id;

    //update data after changes in isBookmarked
    dataItems.map((i) => {
      if (i.title === title) {
        i.isBookmarked ? (i.isBookmarked = false) : (i.isBookmarked = true);
        console.log(i.isBookmarked);
        return i;
      }
      return i;
    });
    // const clickedItem = dataItems.find((i) => i.title === title);
    // console.log(clickedItem);
    // clickedItem.isBookmarked
    //   ? (clickedItem.isBookmarked = false)
    //   : (clickedItem.isBookmarked = true);
    // console.log(clickedItem);
    setDataItems(dataItems);
    localStorage.setItem('dataItems', JSON.stringify(dataItems));
    // console.log(dataItems);
  };

  //set data on LocalStorage
  useEffect(() => {
    localStorage.setItem('dataItems', JSON.stringify(dataItems));
  }, [dataItems]);

  return (
    <AppContext.Provider value={{ toggleBookmarked, dataItems }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// import { useGlobalContext } from './context'
// const { openSidebar, openModal } = useGlobalContext();
