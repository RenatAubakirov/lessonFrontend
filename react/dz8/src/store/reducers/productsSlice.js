import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { allProducts } from "../../data/products";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return allProducts;
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: null,
        error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        });
    }
})

// Action creators are generated for each case reducer function
export const { } = productsSlice.actions

export default productsSlice.reducer