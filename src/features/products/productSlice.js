/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://dummyjson.com/products" 

const fetchProducts = createAsyncThunk(
    "products/fetchProduct",
    async () =>{
        const res = await axios.get(API_URL)
        return res.data.products
    }
)



const productSlice = createSlice({
    name :'products',
    initialState : {
        items : [],
        loading : false,
        error : null
    },

    extraReducers : (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.loading = true
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.loading = false,
            state.items = action.payload
        })
        .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching products";
      });
    }
})
export {fetchProducts}
export default productSlice.reducer */


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProduct",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API_URL);
      return res.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null; // reset error
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // ✅ dynamic error
      });
  },
});

export default productSlice.reducer;