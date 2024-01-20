import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
};

const Productslice = createSlice({ 
    name: "products", 
    initialState,
    extraReducers:(record)=>{
        record.addCase(getProducts.pending,(state,action)=>{
            state.status = 'loading'
        }).addCase(getProducts.fulfilled,(state,action)=>{
            state.status = 'idle'
            state.data = action.payload
        }).addCase(getProducts.rejected,(state,action)=>{
            state.status = 'error'
        })
    }
});
export default Productslice.reducer;

export const getProducts = createAsyncThunk('products/get',async()=>{
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
})
