import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  showMobileMenu: false,
  notifications: [],
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    toggleMobileMenu: (state) => {
      state.showMobileMenu = !state.showMobileMenu
    },
    closeMobileMenu: (state) => {
      state.showMobileMenu = false
    },
    addNotification: (state, action) => {
      const notification = {
        id: Date.now(),
        ...action.payload,
      }
      state.notifications.push(notification)
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      )
    },
    clearNotifications: (state) => {
      state.notifications = []
    },
  },
})

export const {
  setLoading,
  toggleMobileMenu,
  closeMobileMenu,
  addNotification,
  removeNotification,
  clearNotifications,
} = uiSlice.actions

export default uiSlice.reducer
