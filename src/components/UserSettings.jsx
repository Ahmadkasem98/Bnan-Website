import React, { useState } from 'react'
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
  Divider,
  Typography,
  Stack,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import LanguageIcon from '@mui/icons-material/Language'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import NotificationsIcon from '@mui/icons-material/Notifications'
import TextIncreaseIcon from '@mui/icons-material/TextIncrease'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage, setTheme, toggleTheme, setNotifications, setFontSize } from '../store/slices/preferencesSlice'

export default function UserSettings() {
  const dispatch = useDispatch()
  const { language, theme, notifications, fontSize } = useSelector((state) => state.preferences)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage))
    handleClose()
  }

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  const handleNotificationsToggle = () => {
    dispatch(setNotifications(!notifications))
  }

  const handleFontSizeChange = (newSize) => {
    dispatch(setFontSize(newSize))
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <SettingsIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minWidth: 250,
            mt: 1,
          },
        }}
      >
        {/* اللغة */}
        <MenuItem onClick={() => handleLanguageChange('ar')}>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText 
            primary="العربية" 
            secondary={language === 'ar' ? 'محدد' : ''}
          />
        </MenuItem>
        
        <MenuItem onClick={() => handleLanguageChange('en')}>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText 
            primary="English" 
            secondary={language === 'en' ? 'محدد' : ''}
          />
        </MenuItem>

        <Divider />

        {/* الوضع المظلم/الفاتح */}
        <MenuItem onClick={handleThemeToggle}>
          <ListItemIcon>
            {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </ListItemIcon>
          <ListItemText 
            primary={theme === 'light' ? 'الوضع المظلم' : 'الوضع الفاتح'}
          />
        </MenuItem>

        <Divider />

        {/* الإشعارات */}
        <MenuItem>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="الإشعارات" />
          <Switch
            checked={notifications}
            onChange={handleNotificationsToggle}
            color="primary"
          />
        </MenuItem>

        <Divider />

        {/* حجم الخط */}
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            حجم الخط
          </Typography>
          <Stack direction="row" spacing={1}>
            {[
              { value: 'small', label: 'صغير' },
              { value: 'medium', label: 'متوسط' },
              { value: 'large', label: 'كبير' },
            ].map((size) => (
              <MenuItem
                key={size.value}
                onClick={() => handleFontSizeChange(size.value)}
                sx={{ minWidth: 'auto', px: 1 }}
              >
                <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                  <TextIncreaseIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary={size.label}
                  sx={{ 
                    fontSize: size.value === 'small' ? '0.75rem' : 
                           size.value === 'large' ? '1.1rem' : '1rem'
                  }}
                />
              </MenuItem>
            ))}
          </Stack>
        </Box>
      </Menu>
    </>
  )
}
