import React from 'react'
import {
  Box,
  Paper,
  Typography,
  Stack,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  Chip,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {
  setLanguage,
  setTheme,
  toggleTheme,
  setNotifications,
  setFontSize,
  resetPreferences,
} from '../store/slices/preferencesSlice'

export default function PreferencesPanel() {
  const dispatch = useDispatch()
  const preferences = useSelector((state) => state.preferences)

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language))
  }

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  const handleNotificationsToggle = () => {
    dispatch(setNotifications(!preferences.notifications))
  }

  const handleFontSizeChange = (fontSize) => {
    dispatch(setFontSize(fontSize))
  }

  const handleReset = () => {
    dispatch(resetPreferences())
  }

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
        إعدادات الموقع
      </Typography>

      <Stack spacing={3}>
        {/* اللغة */}
        <Box>
          <Typography variant="h6" gutterBottom>
            اللغة
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant={preferences.language === 'ar' ? 'contained' : 'outlined'}
              onClick={() => handleLanguageChange('ar')}
              startIcon={<span>🇸🇦</span>}
            >
              العربية
            </Button>
            <Button
              variant={preferences.language === 'en' ? 'contained' : 'outlined'}
              onClick={() => handleLanguageChange('en')}
              startIcon={<span>🇺🇸</span>}
            >
              English
            </Button>
          </Stack>
        </Box>

        <Divider />

        {/* الوضع المظلم/الفاتح */}
        <Box>
          <Typography variant="h6" gutterBottom>
            الوضع
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={preferences.theme === 'dark'}
                onChange={handleThemeToggle}
                color="primary"
              />
            }
            label={preferences.theme === 'dark' ? 'الوضع المظلم' : 'الوضع الفاتح'}
          />
        </Box>

        <Divider />

        {/* الإشعارات */}
        <Box>
          <Typography variant="h6" gutterBottom>
            الإشعارات
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={preferences.notifications}
                onChange={handleNotificationsToggle}
                color="primary"
              />
            }
            label={preferences.notifications ? 'مفعلة' : 'معطلة'}
          />
        </Box>

        <Divider />

        {/* حجم الخط */}
        <Box>
          <Typography variant="h6" gutterBottom>
            حجم الخط
          </Typography>
          <Stack direction="row" spacing={1}>
            {[
              { value: 'small', label: 'صغير' },
              { value: 'medium', label: 'متوسط' },
              { value: 'large', label: 'كبير' },
            ].map((size) => (
              <Chip
                key={size.value}
                label={size.label}
                color={preferences.fontSize === size.value ? 'primary' : 'default'}
                onClick={() => handleFontSizeChange(size.value)}
                variant={preferences.fontSize === size.value ? 'filled' : 'outlined'}
              />
            ))}
          </Stack>
        </Box>

        <Divider />

        {/* إعادة تعيين */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="error"
            onClick={handleReset}
            sx={{ mt: 2 }}
          >
            إعادة تعيين الإعدادات
          </Button>
        </Box>
      </Stack>
    </Paper>
  )
}
