import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './slices/itemsSlices' // если нету скобок, значит по дефолту
import cartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    itemsReducer,
    cartReducer
    
  },
})



