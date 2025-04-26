
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import productsReducer from './slices/productsSlice';
import newsReducer from './slices/newsSlice';
import metadataReducer from './slices/metadataSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    products: productsReducer,
    news: newsReducer,
    metadata: metadataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
