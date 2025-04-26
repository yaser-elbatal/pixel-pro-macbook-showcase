
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
