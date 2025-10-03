import { Box, Container, Typography, Paper, Stack, Link } from "@mui/material";
import storage1 from "../assets/storage1.jpg";
import storage2 from "../assets/storage2.png";
import storage3 from "../assets/storage3.png";
import { typography } from "../styles/typography";

const posts = [
  {
    date: "السبت 27 سبتمبر 2025",
    title: "لماذا يجب أن نتعلم لغة الإشارة؟",
    excerpt:
      "المنصة مخصصة للأطفال من 6 إلى 11 سنة والمراهقين من 12 إلى 17 سنة مع محتوى...",
    image: storage3,
  },
  {
    date: "الجمعة 26 سبتمبر 2025",
    title: "كيف تدعم طفلك الأصم في رحلته",
    excerpt: "المنصة مخصصة للأطفال من 6 إلى 11 سنة مع محتوى مناسب لكل مرحلة...",
    image: storage2,
  },
  {
    date: "الخميس 25 سبتمبر 2025",
    title: "قصص ملهمة من أشخاص أصمّ",
    excerpt:
      "المنصة مخصصة للأطفال من 6 إلى 11 سنة والمراهقين من 12 إلى 17 سنة مع محتوى...",
    image: storage1,
  },
];

export default function Blog() {
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
                width: "5px",
                height: "5px",
                backgroundColor: "#146BA6",
                borderRadius: "50%",
                // mr: 0.75,
              }}
            />
            <Box
              sx={{
                height: "1px",
                width: 36,
                backgroundColor: "#146BA6",
                borderRadius: "4px",
              }}
            />
          </Box>
          <Typography variant="overline" sx={{ ...typography.title }}>
            المدونة
          </Typography>
        </Stack>
        <Typography
          variant="h5"
          sx={{
            ...typography.subTitle,
            textAlign: "center",
            mb: 1.5,
          }}
        >
          عالم من المقالات
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#64748b", textAlign: "center", mb: 4 }}
        >
          كل ما تحتاج معرفته عن المنصة وتعليم الأطفال لغة الإشارة
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
          }}
        >
          {posts.map((p) => (
            <Paper
              key={p.title}
              elevation={1}
              sx={{
                overflow: "hidden",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                height: 360,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box sx={{ height: 200, overflow: "hidden" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgba(223, 226, 229, 1)",
                  px: 2.5,
                  py: 2,
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  textAlign: "right",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat Arabic, Tajawal, system-ui",
                    fontWeight: 400,
                    color: "rgba(0, 105, 204, 1)",
                    fontSize: "12px",
                    mb: 1,
                  }}
                >
                  {p.date}
                </Typography>
                <Typography
                  sx={{ fontWeight: 600, color: "rgba(13, 39, 64, 1)", mb: 1 }}
                >
                  {p.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(35, 48, 68, 1)", mt: "12px" }}
                >
                  {p.excerpt}{" "}
                  <Link href="#" sx={{ color: "#f9916c" }}>
                    المزيد..
                  </Link>
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
