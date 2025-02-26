import { createSlice } from '@reduxjs/toolkit'
import initProductsData from '../../data/productsInit'


export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: initProductsData,
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = action.payload;
            const newProductId = crypto.randomUUID();
            state.products[newProductId] = {
                id: newProductId,
                name: newProduct.name,
                description: newProduct.description,
                price: newProduct.price,
                available: newProduct.available
            }
        },
        deleteProduct: (state, action) => {
            const productId = action.payload;
            delete state.products[productId];
        },
        updateProduct: (state, action) => {
            const productId = action.payload.id;
            delete action.payload.id;
            state.products[productId] = Object.assign(state.products[productId], action.payload)
        },
        toggleProductAvailable: (state, action) => {
            const productId = action.payload;
            state.products[productId].available = !state.products[productId].available;
        }
    },
})

export const { addProduct, deleteProduct, updateProduct, toggleProductAvailable } = productsSlice.actions;

export default productsSlice.reducer;