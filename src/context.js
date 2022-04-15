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
  const [fullCurrentData, setFullCurrentData] = useState(dataItems);

  //when bookmarked Icon is clicked in Recommended
  const toggleBookmarked = (e) => {
    const title = e.currentTarget.id;

    //update data after changes in isBookmarked
    dataItems.map((i) => {
      if (i.title === title) {
        i.isBookmarked ? (i.isBookmarked = false) : (i.isBookmarked = true);
        console.log(i.isBookmarked);
        // return i;
      }
      // return i;
    });

    setDataItems(dataItems);
    localStorage.setItem('dataItems', JSON.stringify(dataItems));
  };

  //when we have a serchTerm in the serchForm
  const desplaySearchedItems = (searchTerm, pageName) => {
    setFullCurrentData(dataItems);
    if (searchTerm && pageName === 'home') {
      const tempData = dataItems.filter((i) =>
        i.title.toLowerCase().startsWith(searchTerm)
      );
      setDataItems(tempData);
    } else if (!searchTerm) {
      // but you lose the bookmarked info!!!
      // setDataItems(fullCurrentData);
      setDataItems(data);
      // localStorage.setItem('dataItems', JSON.stringify(fullCurrentData));
    }
  };
  // useEffect(() => {
  //   desplaySearchedItems();
  // }, [searchTerm]);

  //set data on LocalStorage
  useEffect(() => {
    localStorage.setItem('dataItems', JSON.stringify(dataItems));
  }, [dataItems]);

  return (
    <AppContext.Provider
      value={{ toggleBookmarked, dataItems, desplaySearchedItems }}
    >
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
