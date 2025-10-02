import React from 'react'
import { Button, Tooltip } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

export default function PreferencesButton() {
  const handleClick = () => {
    // يمكن إضافة navigation هنا لاحقاً
    console.log('فتح إعدادات الموقع')
  }

  return (
    <Tooltip title="إعدادات الموقع">
      <Button
        variant="outlined"
        startIcon={<SettingsIcon />}
        onClick={handleClick}
        sx={{
          borderColor: '#146BA6',
          color: '#146BA6',
          '&:hover': {
            borderColor: '#0f588a',
            backgroundColor: 'rgba(20, 107, 166, 0.04)',
          },
        }}
      >
        الإعدادات
      </Button>
    </Tooltip>
  )
}