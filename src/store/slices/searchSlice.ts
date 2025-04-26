
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
  results: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  searchTerm: '',
  results: [],
  isLoading: false,
  error: null
};

export const searchProducts = createAsyncThunk(
  'search/searchProducts',
  async (term: string, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock results
      const mockResults = [
        { id: 1, name: 'AHLN Box Standard', price: 199 },
        { id: 2, name: 'AHLN Box Premium', price: 299 },
        { id: 3, name: 'AHLN Box Enterprise', price: 499 }
      ].filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      
      return mockResults;
    } catch (error) {
      return rejectWithValue('Failed to search products');
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearch: (state) => {
      state.searchTerm = '';
      state.results = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export const { setSearchTerm, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
