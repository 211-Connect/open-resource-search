import SessionStorage from '@service/sessionStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  location: '',
  taxonomies: '',
  radius: '30',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setDistance: (state, action: PayloadAction<string>) => {
      const radius = parseInt(action.payload);
      if (action.payload.length > 0 && isNaN(radius)) return;

      state.radius = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
      SessionStorage.set('lastLocation', action.payload);
    },
    setTaxonomies: (state, action: PayloadAction<string>) => {
      state.taxonomies = action.payload;
    },
  },
});

export const {
  setQuery,
  setLocation,
  setTaxonomies,
  setDistance,
} = searchSlice.actions;

export default searchSlice.reducer;
