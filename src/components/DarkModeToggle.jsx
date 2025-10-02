import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../store/slices/preferencesSlice'

export default function DarkModeToggle() {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.preferences)

  const handleToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <Tooltip title={theme === 'light' ? 'الوضع المظلم' : 'الوضع الفاتح'}>
      <IconButton
        onClick={handleToggle}
        sx={{
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  )
}
