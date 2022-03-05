import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
}

const cardSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItemToCard(state, action) {
      const newItem = action.payload
      state.totalQuantity++
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      }
    },
    removeItemFromCard(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.totalQuantity--
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
    },
  },
})

export const cardAction = cardSlice.actions

export default cardSlice
