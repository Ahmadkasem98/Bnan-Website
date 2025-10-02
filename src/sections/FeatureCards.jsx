import { Grid, Paper, Box, Typography, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const items = [
  { title: 'اختبارات وتحديات', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop' },
  { title: 'ألعاب تعليمية', image: 'https://images.unsplash.com/photo-1604875493723-d1a51c9563d5?q=80&w=1200&auto=format&fit=crop' },
  { title: 'دروس لغات مصورة', image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop' },
]

export default function FeatureCards() {
  return (
    <Grid container spacing={2} className="pb-12">
      {items.map((it) => (
        <Grid item xs={12} sm={6} md={4} key={it.title}>
          <Paper className="overflow-hidden">
            <Box className="relative">
              <img src={it.image} alt={it.title} className="w-full h-48 object-cover" />
              <IconButton color="primary" className="!absolute !bottom-3 !left-3 !bg-white">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
            <Box className="px-4 py-3 border-t">
              <Typography variant="subtitle1" className="font-medium">{it.title}</Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
