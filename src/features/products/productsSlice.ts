import { createSlice } from '@reduxjs/toolkit';
import { productsData } from './productsData';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsData,
  reducers: {},
});

export default productsSlice.reducer;
