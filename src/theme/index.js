import { createTheme } from '@mui/material/styles'

// دالة لإنشاء الثيم بناءً على التفضيلات
export const createCustomTheme = (preferences) => {
  const isDark = preferences.theme === 'dark'
  const isRTL = preferences.direction === 'rtl'
  
  return createTheme({
    direction: isRTL ? 'rtl' : 'ltr',
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: { main: '#146BA6' },
      secondary: { main: '#27AE60' },
      background: {
        default: isDark ? '#121212' : '#ffffff',
        paper: isDark ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: isDark ? '#ffffff' : '#0f172a',
        secondary: isDark ? '#b0b0b0' : '#64748b',
      },
    },
    typography: {
      fontFamily: 'Montserrat Arabic, Tajawal, system-ui, Arial, sans-serif',
      fontSize: preferences.fontSize === 'small' ? 12 : 
               preferences.fontSize === 'large' ? 16 : 14,
    },
    shape: { borderRadius: 10 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            direction: isRTL ? 'rtl' : 'ltr',
            fontSize: preferences.fontSize === 'small' ? '0.875rem' : 
                     preferences.fontSize === 'large' ? '1.125rem' : '1rem',
          },
        },
      },
    },
  })
}

// الثيم الافتراضي
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#146BA6' },
    secondary: { main: '#27AE60' },
    background: { default: '#ffffff' },
    text: { primary: '#0f172a' },
  },
  typography: {
    fontFamily: 'Montserrat Arabic, Tajawal, system-ui, Arial, sans-serif',
  },
  shape: { borderRadius: 10 },
  direction: 'rtl',
})

export default theme
