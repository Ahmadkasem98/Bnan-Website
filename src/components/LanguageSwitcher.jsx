import React, { useState } from 'react'
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../store/slices/preferencesSlice'

export default function LanguageSwitcher() {
  const dispatch = useDispatch()
  const { language } = useSelector((state) => state.preferences)
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

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ]

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
        <LanguageIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minWidth: 150,
            mt: 1,
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem 
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            selected={language === lang.code}
          >
            <ListItemIcon>
              <Typography sx={{ fontSize: '1.2rem' }}>
                {lang.flag}
              </Typography>
            </ListItemIcon>
            <ListItemText 
              primary={lang.name}
              secondary={language === lang.code ? 'محدد' : ''}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
