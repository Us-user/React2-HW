import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './data.Slice'

export default configureStore({
  reducer: {
    dataSlice : dataSlice
  }
})