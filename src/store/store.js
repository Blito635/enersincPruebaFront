import { configureStore } from '@reduxjs/toolkit'
import { dataSlice } from './slices/datapersonas'

export const store = configureStore({
  reducer: {
    data:dataSlice.reducer,
  },
})