import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeSection: 'hero',
  isScrolling: false,
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload
    },
    setScrolling: (state, action) => {
      state.isScrolling = action.payload
    },
  },
})

export const { setActiveSection, setScrolling } = navigationSlice.actions
export default navigationSlice.reducer
