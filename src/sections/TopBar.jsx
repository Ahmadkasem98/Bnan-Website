import { AppBar, Toolbar, Typography, Stack, Button, Link, IconButton } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
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
              <YouTubeIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="Instagram" className="!text-white hover:!bg-white/10" sx={{ p: 0.5 }}>
              <InstagramIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="X" className="!text-white hover:!bg-white/10" sx={{ p: 0.5 }}>
              <TwitterIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="Facebook" className="!text-white hover:!bg-white/10" sx={{ p: 0.5 }}>
              <FacebookIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="LinkedIn" className="!text-white hover:!bg-white/10" sx={{ p: 0.5 }}>
              <LinkedInIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>

          {/* Right side: phone, email and settings */}
          <Stack direction="row" spacing={3} className="text-sm items-center">
            <Stack direction="row" spacing={1} className="items-center">
              <PhoneInTalkIcon sx={{ fontSize: 20 }} />
              <Typography variant="body2">+966 000 000 000</Typography>
            </Stack>
            <Stack direction="row" spacing={1} className="items-center">
              <EmailOutlinedIcon sx={{ fontSize: 20 }} />
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
