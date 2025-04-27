
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define news item type
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

// Define state type
interface NewsState {
  news: NewsItem[];
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: null,
};

// Mock data to simulate API call
const mockNewsData: NewsItem[] = [
  {
    id: 1,
    title: "GITEX Dubai",
    date: "April 18, 2023",
    excerpt: "Experience AHLN Box's cutting-edge delivery solutions at GITEX Dubai. Visit our booth for live demonstrations and exclusive insights into our upcoming features.",
    imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Global AI Exhibition",
    date: "May 8, 2023",
    excerpt: "Discover how AHLN Box leverages artificial intelligence to revolutionize package delivery. Join us at the Global AI Exhibition for an exclusive preview of upcoming AI features.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

// Async thunk for fetching news
export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  // In a real app, this would be an API call
  // For now, we'll simulate a network delay and return mock data
  return new Promise<NewsItem[]>((resolve) => {
    setTimeout(() => {
      resolve(mockNewsData);
    }, 500);
  });
});

// Create the news slice
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch news';
      });
  },
});

export default newsSlice.reducer;
