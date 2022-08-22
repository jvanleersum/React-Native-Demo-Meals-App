import React, { useState } from 'react';

const initialFavoritesValue = {
  ids: [],
  addFavorite: (mealId) => {},
  removeFavorite: (mealId) => {},
};

const FavoritesContext = React.createContext(initialFavoritesValue);

export default FavoritesContext;

export const FavoritesContextProvider = ({children}) => {
  const [ids, setIds] = useState([]);

  const addFavoriteHandler = (mealId) => {
    setIds(prevIds => [mealId, ...prevIds])
  }

  const removeFavoriteHandler = (mealId) => {
    const newIds = ids.filter(id => id !== mealId);
    setIds(newIds);
  }
  return <FavoritesContext.Provider value={{ids, addFavorite: addFavoriteHandler, removeFavorite: removeFavoriteHandler}}>
    {children}
  </FavoritesContext.Provider>
}