import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Button,
  Chip,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import trending1 from "../assets/trending1.jpg";
import trending2 from "../assets/trending2.jpg";
import trending3 from "../assets/trending3.jpg";
import { typography } from "../styles/typography";
import { GlobalStudentsIcon, ArrowLeftIcon } from "../components/AllIcons";

const items = [
  {
    title: "مسار الرياضة والفنون الممتع",
    image: trending1,
    meta: { age: "سنة 11-6", lessons: "4 دروس", duration: "2:45 ساعة" },
  },
  {
    title: "مسار عالم الأشكال والألوان",
    image: trending2,
    meta: { age: "سنة 11-6", lessons: "5 دروس", duration: "2:15 ساعة" },
  },
  {
    title: "مسار أساسيات لغة الإشارة للأطفال",

    image: trending3,
    meta: { age: "سنة 17-12", lessons: "3 دروس", duration: "1:30 ساعة" },
  },
];

const metaBg = "rgba(255, 127, 80, 0.2)";
const metaFg = "rgb(255, 127, 80)";

function splitValueUnit(text) {
  const parts = text.split(" ");
  if (parts.length >= 2) {
    const first = parts[0];
    const rest = parts.slice(1).join(" ");
    const firstHasDigit = /[0-9]/.test(first);
    if (firstHasDigit) {
      return { value: first, unit: rest };
    }
    return { value: rest, unit: first };
  }
  return { value: text, unit: "" };
}

function Meta({ icon, text }) {
  const { value, unit } = splitValueUnit(text);
  return (
    <Stack direction="row-reverse" spacing={0.75} alignItems="center">
      <Box
        sx={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          backgroundColor: metaBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ fontWeight: 700 }}
      >
        {value}
      </Typography>
      {unit && (
        <Typography variant="caption" color="text.secondary">
          {unit}
        </Typography>
      )}
    </Stack>
  );
}

export default function TrendingTracks() {
  return (
    <Box
      sx={{ py: 8, backgroundColor: "rgba(230, 238, 247, 1)", marginTop: 5, width: '100vw', ml: 'calc(50% - 50vw)', mr: 'calc(50% - 50vw)' }}
    >
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
                width: "5px",
                height: "5px",
                backgroundColor: "#146BA6",
                borderRadius: "50%",
                // mr: 0.75,
              }}
            />
            <Box
              sx={{
                height: "1.3px",
                width: 36,
                backgroundColor: "#146BA6",
                borderRadius: "4px",
              }}
            />
          </Box>
          <Typography variant="overline" sx={{ ...typography.title }}>
            مسارات رائجة
          </Typography>
        </Stack>
        <Typography
          variant="h5"
          sx={{ ...typography.subTitle, textAlign: "center", mb: 4 }}
        >
          المسارات الأكثر طلبًا
        </Typography>

        {/* Cards */}
        <Grid container spacing={3} justifyContent="center">
          {items.map((it) => (
            <Grid item xs={12} md={4} key={it.title}>
              <Paper
                sx={{
                  overflow: "hidden",
                  borderRadius: 2,
                  backgroundColor: "rgba(223, 226, 229, 1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  },
                }}
                elevation={1}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={it.image}
                    alt={it.title}
                    style={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
                {/* Body */}
                <Box sx={{ px: 2.5, py: 2, borderTop: "1px solid #E2E8F0" }}>
                  <Stack
                    direction="column"
                    spacing={1}
                    alignItems="end"
                    sx={{ justifyContent: "space-between", mb: 1 }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: "Montserrat Arabic, Tajawal, system-ui",
                        fontWeight: 600,
                        fontSize: "15px",
                        lineHeight: 1.0,
                        letterSpacing: 0,
                        textAlign: "right",
                      }}
                    >
                      {it.title}
                    </Typography>
                    <Chip
                      label="مبتدئ"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255, 127, 80, 0.2)",
                        color: metaFg,
                        fontWeight: 600,
                        border: "1px solid rgba(255, 127, 80, 1)",
                      }}
                    />
                  </Stack>
                  <Stack direction="row" spacing={2} sx={{ my: 1.5 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<ArrowLeftIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        backgroundColor: "#146BA6",
                        py: 1.1,
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#0f588a",
                          transform: "scale(1.02)",
                        },
                      }}
                    >
                      ابدأ التعلــم
                    </Button>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{ justifyContent: "space-between", mt: 1.5 }}
                  >
                    <Meta
                      icon={
                        <AccessTimeIcon sx={{ fontSize: 14, color: metaFg }} />
                      }
                      text={it.meta.duration}
                    />
                    <Meta
                      icon={
                        <MenuBookIcon sx={{ fontSize: 14, color: metaFg }} />
                      }
                      text={it.meta.lessons}
                    />
                    <Meta
                      icon={
                        <ChildCareIcon sx={{ fontSize: 14, color: metaFg }} />
                      }
                      text={it.meta.age}
                    />
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
