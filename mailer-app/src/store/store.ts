import { configureStore } from '@reduxjs/toolkit'
import mailHistorySlice from './reducer'

export default configureStore({
  reducer: { history: mailHistorySlice },
})
