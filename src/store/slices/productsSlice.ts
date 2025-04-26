
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock products
      return [
        { 
          id: 1, 
          name: 'AHLN Box Standard', 
          description: 'Perfect for residential use with basic security features',
          price: 199,
          imageUrl: '/placeholder.svg'
        },
        { 
          id: 2, 
          name: 'AHLN Box Premium', 
          description: 'Enhanced security with camera integration and smart notifications',
          price: 299,
          imageUrl: '/placeholder.svg'
        },
        { 
          id: 3, 
          name: 'AHLN Box Enterprise', 
          description: 'Commercial-grade solution for businesses with advanced features',
          price: 499,
          imageUrl: '/placeholder.svg'
        }
      ];
    } catch (error) {
      return rejectWithValue('Failed to fetch products');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export default productsSlice.reducer;
