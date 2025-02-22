import { createSlice } from '@reduxjs/toolkit'

export const CartStore = createSlice({
  name: 'CartStore',
  initialState: {
    quantity: 0,
  },
  reducers: {
    AddItemStoreWithQuantity: (state, actions) => {
      state.quantity = quantity
    },
  }
})

export const {
  AddItemStoreWithQuantity,
} = CartStore.actions

export default CartStore.reducer