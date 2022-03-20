import { createSlice } from '@reduxjs/toolkit'
import { MailerOptions } from '../types'

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    sent: [] as MailerOptions[],
    action: {},
  },
  reducers: {
    update: (state, action) => {
      state.sent = [...state.sent, ...[action.payload]]
    },
  },
})

export const { update } = historySlice.actions

export default historySlice.reducer
