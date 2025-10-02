import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#146BA6',
        color: 'white',
      }}
    >
      <CircularProgress 
        size={60} 
        sx={{ 
          color: '#FFD650',
          mb: 2 
        }} 
      />
      <Typography variant="h6" sx={{ color: 'white' }}>
        جاري التحميل...
      </Typography>
    </Box>
  )
}
