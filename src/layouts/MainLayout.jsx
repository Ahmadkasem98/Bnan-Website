import { Box, Container } from '@mui/material'
import TopBar from '../sections/TopBar'
import Navbar from '../sections/Navbar'
import Footer from "../sections/Footer";

export default function MainLayout({ children }) {
  return (
    <Box className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />
      <Container component="main" className="flex-1 py-8">
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
