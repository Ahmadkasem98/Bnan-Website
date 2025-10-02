import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff'
import { useSelector, useDispatch } from 'react-redux'
import { setNotifications } from '../store/slices/preferencesSlice'

export default function NotificationsToggle() {
  const dispatch = useDispatch()
  const { notifications } = useSelector((state) => state.preferences)

  const handleToggle = () => {
    dispatch(setNotifications(!notifications))
  }

  return (
    <Tooltip title={notifications ? 'إيقاف الإشعارات' : 'تفعيل الإشعارات'}>
      <IconButton
        onClick={handleToggle}
        sx={{
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {notifications ? <NotificationsIcon /> : <NotificationsOffIcon />}
      </IconButton>
    </Tooltip>
  )
}
