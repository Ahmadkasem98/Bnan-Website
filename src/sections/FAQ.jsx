import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import download1 from "../assets/download1.jpg";

const faqs = [
  {
    q: "ما هي الفئة العمرية المناسبة للمنصة؟",
    a: "المنصة مخصصة للأطفال من 6 إلى 11 سنة والمراهقين من 12 إلى 17 سنة مع محتوى مناسب لكل مرحلة عمرية.",
  },
  {
    q: "هل يحتاج طفلي إلى خبرة سابقة بلغة الإشارة؟",
    a: "لا، نبدأ من الأساسيات بخطوات بسيطة وتدريجية.",
  },
  {
    q: "هل يمكن للأباء متابعة تقدم أطفالهم؟",
    a: "نعم، هناك لوحة متابعة وتقارير أسبوعية.",
  },
  {
    q: "هل هناك شهادات إنجاز؟",
    a: "نعم، يحصل الطفل على شهادة إنجاز عند إتمام المسار.",
  },
];

export default function FAQ() {
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
            الأسئلة الأكثر شيوعًا
          </Typography>
        </Stack>
        <Typography
          variant="h5"
          sx={{ fontWeight: 800, textAlign: "center", mb: 8, fontSize: "1.5rem" }}
        >
          أسئلة متكررة، أجوبة واضحة
        </Typography>

        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            alignItems: "start",
          }}
        >
          {/* Accordion (force left on sm+) */}
          <Grid item xs={12} sm={6} md={6} sx={{ order: { xs: 2, sm: 1 } }}>
            <Stack spacing={1.5}>
              {faqs.map((f, idx) => (
                <Paper
                  key={idx}
                  sx={{
                    backgroundColor: "rgba(223, 226, 229, 1)",
                    borderRadius: 2,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(5px)",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                    }
                  }}
                >
                  <Accordion
                    disableGutters
                    elevation={0}
                    square
                    defaultExpanded={idx === 0}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ fontWeight: 600 }}>{f.q}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary">
                        {f.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Paper>
              ))}
            </Stack>
          </Grid>

          {/* Image (force right on sm+) */}
          <Grid item xs={12} sm={6} md={6} sx={{ order: { xs: 1, sm: 2 } }}>
            <Box sx={{ position: "relative", width: "480px" }}>
              {/* Gradient bar behind the image */}
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: 17,
                  left: -18,
                  height: 350,
                  width: 350,
                  borderRadius: "4px",
                  background:
                    "linear-gradient(90deg, rgba(255, 214, 80, 1) 0%, rgba(0, 105, 204, 1) 100%)",
                  zIndex: 0,
                }}
              />
              {/* Image card */}
              <Paper
                elevation={2}
                sx={{
                  position: "relative",
                  borderRadius: "4px",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <img
                  src={download1}
                  alt="faq"
                  style={{
                    width: "480px",
                    height: 408,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
