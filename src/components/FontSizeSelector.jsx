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
import TextIncreaseIcon from '@mui/icons-material/TextIncrease'
import { useSelector, useDispatch } from 'react-redux'
import { setFontSize } from '../store/slices/preferencesSlice'

export default function FontSizeSelector() {
  const dispatch = useDispatch()
  const { fontSize } = useSelector((state) => state.preferences)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleFontSizeChange = (newSize) => {
    dispatch(setFontSize(newSize))
    handleClose()
  }

  const fontSizes = [
    { value: 'small', label: 'صغير', size: '0.75rem' },
    { value: 'medium', label: 'متوسط', size: '1rem' },
    { value: 'large', label: 'كبير', size: '1.25rem' },
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
        <TextIncreaseIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minWidth: 120,
            mt: 1,
          },
        }}
      >
        {fontSizes.map((size) => (
          <MenuItem 
            key={size.value}
            onClick={() => handleFontSizeChange(size.value)}
            selected={fontSize === size.value}
          >
            <ListItemIcon>
              <TextIncreaseIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText 
              primary={
                <Typography sx={{ fontSize: size.size }}>
                  {size.label}
                </Typography>
              }
              secondary={fontSize === size.value ? 'محدد' : ''}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
