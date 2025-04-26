
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content?: string;
}

interface NewsState {
  news: NewsItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: null
};

// Thunk to fetch news data from the backend
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // For now, we're using mock data
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock news data
      return [
        { 
          id: 1,
          title: "GITEX Dubai",
          date: "April 15, 2023",
          excerpt: "Experience AHLN Box's cutting-edge delivery solutions at GITEX Dubai. Visit our booth for live demonstrations and exclusive insights into smart delivery technology.",
          imageUrl: "/placeholder.svg",
          content: "Full article content goes here..."
        },
        { 
          id: 2,
          title: "Global AI Exhibition",
          date: "March 18, 2023",
          excerpt: "Discover how AHLN Box leverages artificial intelligence to revolutionize package delivery. Join us at the Global AI Exhibition for an in-depth look at our innovative systems.",
          imageUrl: "/placeholder.svg",
          content: "Full article content goes here..."
        },
        { 
          id: 3,
          title: "Smart Cities Summit",
          date: "February 5, 2023",
          excerpt: "AHLN presents its urban delivery infrastructure solutions at the Smart Cities Summit. Learn how our technology is shaping the future of package delivery in urban environments.",
          imageUrl: "/placeholder.svg",
          content: "Full article content goes here..."
        },
        { 
          id: 4,
          title: "Tech Innovation Awards",
          date: "January 20, 2023",
          excerpt: "AHLN Box has been nominated for the Tech Innovation Award in logistics. Our revolutionary approach to secure package delivery continues to gain industry recognition.",
          imageUrl: "/placeholder.svg",
          content: "Full article content goes here..."
        }
      ];
    } catch (error) {
      return rejectWithValue('Failed to fetch news');
    }
  }
);

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
        state.error = action.payload as string;
      });
  }
});

export default newsSlice.reducer;
