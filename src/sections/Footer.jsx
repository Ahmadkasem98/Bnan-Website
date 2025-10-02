import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import footerLogo from "../assets/footer-logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChatIcon from "@mui/icons-material/Chat";

const FOOTER_BG = "#003E66";
const YELLOW = "#FFD650";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: FOOTER_BG, py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent={"space-around"} className="pb-10">
          {/* Logo and Description Column (Rightmost) */}
          <Grid item xs={12} md={3} sx={{ order: { xs: 1, md: 4 } }}>
            <Stack spacing={3} sx={{ alignItems: "flex-end" }}>
              <Box sx={{ textAlign: "right" }}>
                <img src={footerLogo} alt="BNAN Logo" style={{ height: '60px' }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ 
                  color: "#fff !important",
                  lineHeight: 1.8,
                  textAlign: "right",
                  maxWidth: "280px",
                  marginTop: "10px"
                }}
              >
                منصة تعليمية رقمية مبتكرة مخصصة لتعليم
                <br />
                الأطفال لغة الإشارة بطريقة تفاعلية ممتعة
                <br />
                تجمع بين التعلم واللعب.
              </Typography>
              <Stack direction="row" spacing={1.5}>
                <IconButton
                  className="text-white p-1 hover:text-[#FFD650]"
                  sx={{
                    color: "#fff !important",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      color: "#FFD650 !important",
                      transform: "scale(1.2) rotate(5deg)"
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  className="text-white p-1 hover:text-[#FFD650]"
                  sx={{
                    color: "#fff !important",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      color: "#FFD650 !important",
                      transform: "scale(1.2) rotate(5deg)"
                    },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton
                  className="text-white p-1 hover:text-[#FFD650]"
                  sx={{
                    color: "#fff !important",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      color: "#FFD650 !important",
                      transform: "scale(1.2) rotate(5deg)"
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  className="text-white p-1 hover:text-[#FFD650]"
                  sx={{
                    color: "#fff !important",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      color: "#FFD650 !important",
                      transform: "scale(1.2) rotate(5deg)"
                    },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  className="text-white p-1 hover:text-[#FFD650]"
                  sx={{
                    color: "#fff !important",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      color: "#FFD650 !important",
                      transform: "scale(1.2) rotate(5deg)"
                    },
                  }}
                >
                  <ChatIcon />
                </IconButton>
                <IconButton
                  className="text-white p-1 hover:text-[#FFD650]"
                  sx={{
                    color: "#fff !important",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      color: "#FFD650 !important",
                      transform: "scale(1.2) rotate(5deg)"
                    },
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links Column 1 */}
          <Grid item xs={12} md={3} sx={{ order: { xs: 2, md: 3 } }}>
            <Stack spacing={2.5} sx={{ alignItems: "flex-end" }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ 
                    color: "#fff !important",
                    fontWeight: 700,
                    marginBottom: "4px",
                    textAlign: "right",
                    fontSize: "16px"
                  }}
                >
                  روابط سريعة
                </Typography>
                <Box sx={{ 
                  height: "2px", 
                  width: "50px", 
                  backgroundColor: "#FFD650", 
                  borderRadius: "1px",
                  marginLeft:"35px" 
                }} />
              </Box>
              <Stack spacing={2}>
                {["الرئيسية", "الخدمات", "عن منصة بنان", "المسارات"].map(
                  (link) => (
                    <Stack
                      key={link}
                      direction="row"
                      spacing={1}
                      className="items-center justify-end"
                    >
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: "#fff !important",
                          cursor: "pointer",
                          fontSize: "14px",
                          "&:hover": { color: "#FFD650 !important" }
                        }}
                      >
                        {link}
                      </Typography>
                      <Typography sx={{ 
                        color: "#FFD650 !important",
                        fontSize: "20px",
                        fontWeight: 600
                      }}>
                        «
                      </Typography>
                    </Stack>
                  )
                )}
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links Column 2 */}
          <Grid item xs={12} md={3} sx={{ order: { xs: 3, md: 2 } }}>
            <Stack spacing={2.5} sx={{ alignItems: "flex-end" }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ 
                    color: "#fff !important",
                    fontWeight: 700,
                    marginBottom: "4px",
                    textAlign: "right",
                    fontSize: "16px"
                  }}
                >
                  روابط سريعة
                </Typography>
                <Box sx={{ 
                  height: "2px", 
                  width: "50px", 
                  backgroundColor: "#FFD650", 
                  borderRadius: "1px",
                  marginLeft:"35px"
                }} />
              </Box>
              <Stack spacing={2}>
                {[
                  "أبرز المدربين",
                  "المدونة",
                  "تواصل معنا",
                  "الدعم الفني والتعليمي",
                ].map((link) => (
                  <Stack
                    key={link}
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center", justifyContent: "flex-end" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "14px",
                        "&:hover": { color: YELLOW },
                      }}
                    >
                      {link}
                    </Typography>
                    <Typography
                      sx={{
                        color: YELLOW,
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      «
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links Column 3 (Leftmost) */}
          <Grid item xs={12} md={3} sx={{ order: { xs: 4, md: 1 } }}>
            <Stack spacing={2.5} sx={{ alignItems: "flex-end" }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ 
                    color: "#fff !important",
                    fontWeight: 700,
                    marginBottom: "4px",
                    textAlign: "right",
                    fontSize: "16px"
                  }}
                >
                  روابط سريعة
                </Typography>
                <Box sx={{ 
                  height: "2px", 
                  width: "50px", 
                  backgroundColor: "#FFD650", 
                  borderRadius: "1px" ,
                   marginLeft:"35px"
                }} />
              </Box>
              <Stack spacing={2}>
                {[
                  "الشروط والأحكام",
                  "سياسة الخصوصية",
                  "الحقوق الملكية الفكرية",
                  "مركز الدعم والمساعدة",
                ].map((link) => (
                  <Stack
                    key={link}
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center", justifyContent: "flex-end" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "14px",
                        "&:hover": { color: YELLOW },
                      }}
                    >
                      {link}
                    </Typography>
                    <Typography
                      sx={{
                        color: YELLOW,
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      «
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box 
          sx={{ 
            marginTop: "20px",
            paddingTop: "12px",
            textAlign: "center",
            borderTop: '1px solid rgba(255, 255, 255, 0.2) !important'
          }}
        >
          <Typography
            variant="body2"
            sx={{ 
              color: "#fff !important",
              fontSize: "14px",
              marginTop: "20px"
            }}
          >
            منصة بنان التعليمية | جميع الحقوق محفوظة.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
