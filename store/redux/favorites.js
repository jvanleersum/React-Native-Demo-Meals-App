import { createSlice } from '@reduxjs/toolkit';

const initialState = { ids: [] };

const FavoritesSlice = createSlice({
  name: 'favorites', 
  initialState, 
  reducers: {
    addFavorite(state, action) {
      state.ids.push(action.payload.id);
    },
    removeFavorite(state, action) {
      const idIndex = state.ids.indexOf(action.payload.id)
      state.ids.splice(idIndex, 1)
    },
  }
})

export default FavoritesSlice;

export const favoriteActions = FavoritesSlice.actions