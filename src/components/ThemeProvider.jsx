import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { createCustomTheme } from '../theme'

export default function ThemeProvider({ children }) {
  const preferences = useSelector((state) => state.preferences)
  const theme = createCustomTheme(preferences)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
