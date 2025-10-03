import { AppBar, Toolbar, Typography, Stack, Button, Link, IconButton } from '@mui/material'
import { LinkedInIconCustom, InstagramIconCustom, XIconCustom, FacebookIconCustom, YouTubeIconCustom, MailIcon, PhoneIcon } from '../components/AllIcons'
import UserSettings from '../components/UserSettings'
import LanguageSwitcher from '../components/LanguageSwitcher'
import DarkModeToggle from '../components/DarkModeToggle'
import FontSizeSelector from '../components/FontSizeSelector'
import NotificationsToggle from '../components/NotificationsToggle'

export default function TopBar() {
  return (
    <AppBar position="static" color="primary" elevation={0} className="!bg-[#146BA6]">
      <Toolbar className="min-h-10 !py-1">
        <Stack direction="row" spacing={2} className="w-full items-center justify-between text-white">
          {/* Left side: social icons */}
          <Stack direction="row" spacing={0.5} className="items-center">
            <IconButton size="small" color="inherit" aria-label="YouTube" className="!text-white hover:!bg-white/10" sx={{ p: 0.5 }}>
              <YouTubeIconCustom />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="Instagram" className="!text-white hover:!bg-white/10" sx={{ p: 0.5 }}>
              <InstagramIconCustom />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="X" className="!text-white hover:!bg-white/10" sx={{ p: 0.5 }}>
              <XIconCustom />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="Facebook" className="!text-white hover:!bg-white/10" sx={{ p: 0.5 }}>
              <FacebookIconCustom />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="LinkedIn" className="!text-white hover:!bg-white/10" sx={{ p: 0.5 }}>
              <LinkedInIconCustom />
            </IconButton>
          </Stack>

          {/* Right side: phone, email and settings */}
          <Stack direction="row" spacing={3} className="text-sm items-center">
            <Stack direction="row" spacing={1} className="items-center">
              <PhoneIcon />
              <Typography variant="body2">+966 000 000 000</Typography>
            </Stack>
            <Stack direction="row" spacing={1} className="items-center">
              <MailIcon />
              <Link href="#" color="inherit" underline="hover">bnan@gmail.com</Link>
            </Stack>
            {/* <LanguageSwitcher />
            <DarkModeToggle />
            <FontSizeSelector />
            <NotificationsToggle /> */}
            <UserSettings />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
