import Thunk from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import searchReducer from './slices/search';
import locationReducer from './slices/location';
import resultsReducer from './slices/results';
import pageReducer from './slices/page';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    location: locationReducer,
    results: resultsReducer,
    page: pageReducer,
  },
  middleware: new MiddlewareArray().concat(Thunk),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
