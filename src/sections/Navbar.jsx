import { AppBar, Toolbar, Stack, IconButton, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import LogoBNAN from '../components/LogoBNAN'
import PreferencesButton from '../components/PreferencesButton'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveSection, setScrolling } from '../store/slices/navigationSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const { activeSection } = useSelector((state) => state.navigation)
  
  const links = [
    { label: 'الرئيسية', id: 'hero' },
    { label: 'الخدمات', id: 'services' },
    { label: 'عن منصة بنان', id: 'about' },
    { label: 'المسارات', id: 'trending' },
    { label: 'أثر المتدربين', id: 'trainers' },
    { label: 'المدونة', id: 'blog' },
    { label: 'تواصل معنا', id: 'contact' },
  ]

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      dispatch(setScrolling(true))
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      dispatch(setActiveSection(id))
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        dispatch(setScrolling(false))
      }, 1000)
    }
  }

  useEffect(() => {
    const sectionIds = links.map(l => l.id)
    const options = {
      // Top margin accounts for sticky navbar height
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
    const observer = new IntersectionObserver((entries) => {
      // Choose the most visible entry
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible && visible.target && sectionIds.includes(visible.target.id)) {
        dispatch(setActiveSection(visible.target.id))
      }
    }, options)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [dispatch])

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar className="min-h-16">
        {/* Use row-reverse to ensure logo stays on the right in RTL */}
        <Stack direction="row-reverse" spacing={3} className="w-full items-center justify-between">
          {/* Right: Logo */}
          <LogoBNAN width={135} height={40} />

          {/* Center: Nav links (row-reverse so 'الرئيسية' is on the right) */}
          <Stack direction="row-reverse" spacing={3} className="items-center">
            {links.map((t) => {
              const isActive = activeSection === t.id
              return (
                    <Button
                      key={t.id}
                      color={isActive ? 'primary' : 'inherit'}
                      className={isActive ? '!text-[#146BA6] !font-semibold' : '!text-slate-600 hover:!text-[#146BA6]'}
                      sx={{
                        ...(isActive ? { borderBottom: '2px solid #146BA6', borderRadius: 0, pb: 1 } : {}),
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)"
                        }
                      }}
                      onClick={() => handleScroll(t.id)}
                    >
                  {t.label}
                </Button>
              )
            })}
          </Stack>

          {/* Left: Join button, preferences, then search */}
          <Stack direction="row" spacing={1.5} className="items-center">
                <Button
                  variant="contained"
                  startIcon={<PersonAddAlt1Icon />}
                  className="!rounded-xl"
                  sx={{
                    bgcolor: '#27AE60',
                    width: 110,
                    height: 48,
                    px: 0,
                    transition: "all 0.3s ease",
                    '&:hover': { 
                      bgcolor: '#1f9a55',
                      transform: "scale(1.05)"
                    },
                  }}
                  onClick={() => handleScroll('contact')}
                >
              انضم إلينا
            </Button>
            {/* <PreferencesButton /> */}
            <IconButton color="primary" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}