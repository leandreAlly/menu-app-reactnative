import { createContext } from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  return <FavoriteContext.Provider>{children}</FavoriteContext.Provider>;
}

export default FavoritesContextProvider;
