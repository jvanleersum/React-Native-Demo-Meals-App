import { configureStore } from '@reduxjs/toolkit';
import FavoritesSlice from './favorites';

const store = configureStore({
  reducer: FavoritesSlice.reducer,
});

export default store;