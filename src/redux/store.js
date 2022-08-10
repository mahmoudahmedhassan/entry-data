import { configureStore } from '@reduxjs/toolkit'
import students from './studentsSlice'
export  const store = configureStore({
  reducer: {
    students
  },
})