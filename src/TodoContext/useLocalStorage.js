import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialState) => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(initialState);
  
    useEffect(() => {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parserItems;
      
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialState));
          parserItems = initialState;
        } else {
          parserItems = JSON.parse(localStorageItem);
        }
        setItems(parserItems);
        setLoading(false);
      }, 1000);
    }, [])
    
    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItems(newItems);
    }
  
    return[
      items,
      saveItem,
      loading
    ]
}