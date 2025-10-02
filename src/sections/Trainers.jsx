import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";

const trainers = [
  { name: "اسم المدرب الكامل", role: "مدرب في علوم البيئة", image: trainer3 },
  { name: "اسم المدرب الكامل", role: "مدرب رياضيات", image: trainer2 },
  { name: "اسم المدرب الكامل", role: "مدرب لغة إشارة", image: trainer1 },
];

export default function Trainers() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "center", mb: 1 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: "#146BA6",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                height: "2px",
                width: 36,
                backgroundColor: "#146BA6",
                borderRadius: "4px",
              }}
            />
          </Box>
          <Typography
            variant="overline"
            sx={{ color: "#146BA6", fontWeight: 600, fontSize:"0.80rem" }}
          >
            مدربو المسارات
          </Typography>
        </Stack>
        <Typography
          variant="h5"
          sx={{ fontWeight: 800, textAlign: "center", mb: 4, fontSize: "1.5rem" }}
        >
          أبرز المدربين لدى بنان
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {trainers.map((t) => (
            <Grid item xs={12} md={4} key={t.name}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 0.3,
                  overflow: "hidden",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  backgroundColor: 'transparent',
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
                  }
                }}
              >
                {/* Trainer image */}
                <Box sx={{ position: 'relative' }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: "100%",
                      height: 230,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
                {/* Bottom caption card overlapping image */}
                <Box
                  sx={{
                    px: 2,
                    py: 1.5,
                    backgroundColor: "#ffffff",
                    borderRadius: 0.2,
                    width: '90%',
                    mx: 'auto',
                    position: 'relative',
                    top: -16,
                    boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat Arabic, Tajawal, system-ui",
                      fontWeight: 600,
                      fontSize: "16px",
                      textAlign: "center",
                      mb: 0.5,
                    }}
                  >
                    {t.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    {t.role}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
