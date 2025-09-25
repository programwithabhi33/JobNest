import { configureStore } from '@reduxjs/toolkit'
import jobListReducer from '../slices/jobList'

const store = configureStore({
  reducer: {
    jobList: jobListReducer
  }
})

export default store
