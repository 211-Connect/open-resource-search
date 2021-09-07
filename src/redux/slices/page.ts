import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  url: '',
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { setLoadingState, setUrl } = pageSlice.actions;

export default pageSlice.reducer;
