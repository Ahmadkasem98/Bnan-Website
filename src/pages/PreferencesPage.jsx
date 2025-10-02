import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import PreferencesPanel from '../components/PreferencesPanel'

export default function PreferencesPage() {
  return (
    <Box sx={{ py: 4, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          إعدادات الموقع
        </Typography>
        <PreferencesPanel />
      </Container>
    </Box>
  )
}
