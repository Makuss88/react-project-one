import { createSlice } from '@reduxjs/toolkit'

const initialState = { cardIsVisible: false }

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.cardIsVisible = !state.cardIsVisible
    },
  },
})

export const uiAction = uiSlice.actions

export default uiSlice
