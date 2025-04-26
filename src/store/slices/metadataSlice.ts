
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Metadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

interface MetadataState {
  metadata: Metadata | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: MetadataState = {
  metadata: null,
  isLoading: false,
  error: null
};

export const fetchMetadata = createAsyncThunk(
  'metadata/fetchMetadata',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // Mock implementation with a delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock metadata
      return {
        title: "AHLN - Revolutionary Smart Delivery System",
        description: "Experience the future of package delivery with AHLN Box. Our smart delivery system ensures secure, efficient, and accessible package management.",
        keywords: "AHLN, smart delivery, package security, delivery system, IoT delivery, secure package",
        ogTitle: "AHLN - Smart Package Delivery System",
        ogDescription: "Revolutionary smart delivery system for secure and efficient package delivery",
        ogImage: "/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png",
        twitterTitle: "AHLN - Smart Package Delivery",
        twitterDescription: "Revolutionizing package delivery with smart, secure technology",
        twitterImage: "/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png"
      };
    } catch (error) {
      return rejectWithValue('Failed to fetch metadata');
    }
  }
);

const metadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetadata.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMetadata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.metadata = action.payload;
      })
      .addCase(fetchMetadata.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export default metadataSlice.reducer;
