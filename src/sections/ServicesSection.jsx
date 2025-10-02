import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import { VideoLessonIcon, EducationalGamesIcon, TestsChallengesIcon } from "../components/AllIcons";
import s1Image from "../assets/s1.jpg";
import s2Image from "../assets/s2.jpg";
import s3Image from "../assets/s3.jpg";

const cards = [
  { title: "اختبارات وتحديات", icon: <TestsChallengesIcon size={44} />, image: s1Image },
  { title: "ألعاب تعليمية", icon: <EducationalGamesIcon size={44} />, image: s2Image },
  { title: "دروس تفاعلية مصورة", icon: <VideoLessonIcon size={44} />, image: s3Image },
];

export default function ServicesSection() {
  return (
    <Box className="bg-white py-12">
      <Container>
        {/* Label */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "center", mb: 3 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" ,marginTop:5 }}>
            <Box 
              sx={{ 
                width: "6px", 
                height: "6px", 
                backgroundColor: "#146BA6", 
                borderRadius: "50%",
                ml: 0.5
              }}
            ></Box>
            <Box 
              sx={{ 
                height: "2px", 
                width: "32px", 
                backgroundColor: "#146BA6", 
                borderRadius: "4px" 
              }}
            ></Box>
          </Box>
          <Typography
            variant="overline"
            sx={{ color: "#146BA6", fontWeight: 600 , fontSize:"0.80rem" }}
          >
            خدماتنا
          </Typography>
        </Stack>

        {/* Title and subtitle */}
        <Stack spacing={1} sx={{ textAlign: "center", alignItems: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 1, fontSize: "1.5rem" }}
          >
            ماذا تقدم بنان؟
          </Typography>
          <Typography
            variant="body2"
            sx={{ 
              color: "#64748b", 
              maxWidth: "600px", 
              lineHeight: 1.6,
              textAlign: "center"
            }}
          >
            نقدم للأطفال تجربة تعليمية ممتعة تساعدهم على تعلم لغة الإشارة
            <br />
            بشكلٍ تفاعلي وسلسة لتساعدهم على تطوير مهارة وبناء تواصل جديد معًا.
          </Typography>
        </Stack>

        {/* Cards */}
        <Grid
          container
          spacing={4}
          sx={{ 
            justifyContent: "center", 
            flexWrap: "nowrap", 
            mt: 4,
            display: "flex"
          }}
        >
          {cards.map((c) => (
            <Grid item xs={12} sm={4} md={4} key={c.title}>
              <Paper
                elevation={2}
                sx={{ 
                  overflow: "hidden", 
                  borderRadius: "8px", 
                  width: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    boxShadow: 4,
                    transform: "translateY(-8px)"
                  }
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={c.image}
                    alt={c.title}
                    style={{ width: 394, height: 296, objectFit: "cover", width: "100%" }}
                  />
                  {/* Yellow accent bar */}
                  <Box sx={{ 
                    position: "absolute", 
                    left: 0, 
                    top: 0, 
                    width: "4px", 
                    height: "100%", 
                    backgroundColor: "#fbbf24" 
                  }}></Box>
                  {/* Icon positioned in bottom-right */}
                  <Box
                    sx={{ 
                      position: "absolute", 
                      bottom: -16, 
                      right: 22,
                      width: 45,
                      height: 45,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      "&:hover": { 
                        transform: "scale(1.1) rotate(5deg)"
                      }
                    }}
                  >
                    {c.icon}
                  </Box>
                </Box>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "center", px: 2.5, py: 2 }}
                >
                  <Typography color="primary" sx={{ fontSize: "20px", mr: 1 }}>
                    ←
                  </Typography>
                  <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                    {c.title}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
