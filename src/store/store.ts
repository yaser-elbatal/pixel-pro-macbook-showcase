
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import metadataReducer from './slices/metadataSlice';
import productsReducer from './slices/productsSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    metadata: metadataReducer,
    products: productsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
