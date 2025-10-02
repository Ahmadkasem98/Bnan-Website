import { createSlice } from '@reduxjs/toolkit'

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    language: 'ar', 
    theme: 'light', 
    notifications: true,
    fontSize: 'medium', 
    direction: 'rtl', 
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
      state.direction = action.payload === 'ar' ? 'rtl' : 'ltr'
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload
    },
    resetPreferences: (state) => {
      state.language = 'ar'
      state.theme = 'light'
      state.notifications = true
      state.fontSize = 'medium'
      state.direction = 'rtl'
    }
  },
})

export const { 
  setLanguage, 
  setTheme, 
  toggleTheme, 
  setNotifications, 
  setFontSize, 
  resetPreferences 
} = preferencesSlice.actions

export default preferencesSlice.reducer
