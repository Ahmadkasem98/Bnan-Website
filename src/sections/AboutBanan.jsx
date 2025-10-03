import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GlobalStudentsIcon, ArrowLeftIcon } from "../components/AllIcons";
import screen5 from "../assets/screen5.jpg";
import screen6 from "../assets/screen6.jpg";
import PublicIcon from "@mui/icons-material/Public";
import { typography } from "../styles/typography";

export default function AboutBanan() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#F8FAFC", marginTop: 5 }}>
      <Container>
        {/* Force two columns using CSS grid to avoid wrapping issues */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 4,
            alignItems: "start",
          }}
        >
          {/* Left: Images */}
          <Box
            sx={{ position: "relative", pr: 3, minWidth: 0, marginTop: "22px" }}
          >
            {/* Big image */}
            <Paper
              elevation={0}
              sx={{ overflow: "hidden", borderRadius: "12px" }}
            >
              <img
                src={screen5}
                alt="about"
                style={{
                  width: "100%",
                  height: 420,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Paper>

            {/* Stat badge */}
            <Paper
              elevation={1}
              sx={{
                position: "absolute",
                top: -20,
                left: -23,
                px: 2,
                py: 1.2,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: 1,
                zIndex: 2,
                border: "1px solid #E2E8F0",
                backgroundColor: "#fff",
                width: 175,
                height: 70,
              }}
            >
              <Stack
                direction="row-reverse"
                alignItems="center"
                spacing={1}
                sx={{ width: "100%" }}
              >
                <PublicIcon sx={{ color: "#146BA6" }} />
                <Stack direction="column">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      color: "#146BA6",
                      lineHeight: 2,
                      textAlign: "right",
                    }}
                  >
                    +150,000
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontWeight: 700, lineHeight: 1 }}
                  >
                    طالب حول العالم
                  </Typography>
                </Stack>
              </Stack>
            </Paper>

            {/* Small overlay image */}
            <Paper
              elevation={2}
              sx={{
                position: "absolute",
                bottom: -25,
                left: -23,
                borderRadius: "12px",
                overflow: "hidden",
                zIndex: 2,
                border: "3px solid #fff",
                boxShadow: 3,
              }}
            >
              <img
                src={screen6}
                alt="about small"
                style={{
                  width: 200,
                  height: 140,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Paper>
          </Box>

          {/* Right: Content */}
          <Box>
            {/* Label with line and dot, aligned to the right */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", justifyContent: "flex-end", mb: 1 }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "#146BA6",
                    borderRadius: "50%",
                    //   mr: 0.75,
                  }}
                />
                <Box
                  sx={{
                    height: "1.3px",
                    width: "36px",
                    backgroundColor: "#146BA6",
                    borderRadius: "4px",
                  }}
                />
              </Box>
              <Typography variant="overline" sx={{ ...typography.title }}>
                عن بنان
              </Typography>
            </Stack>

            <Typography
              variant="h5"
              sx={{
                mb: 1,
                textAlign: 'right',
                ...typography.subTitle,
              }}
            >
              حول منصة بنان التعليمية
            </Typography>

            {/* Paragraph 1 */}
            <Typography
              variant="body2"
              //   color="text.secondary"
              sx={{ mb: 1.5, ...typography.description }}
            >
              منصتنــا الرقميــة التعليميــة هي مساحـة متكاملة صممت خصيصًا
              للأطفال والمراهقين الصم لتقديم تجربــة تعليميــة غنيــة وممتعة.
              تساعد المنصة المستخدمين على اكتسـاب مهارات لغة الإشارة بثقة ومتعة،
              من خلال بيئة تعليمية تفاعليـة وآمنة، تجمع بين الدروس المصــوّرة،
              الألعــاب، القصــص التفاعليــة، والأنشطــة التي تعـزز الفضــول
              والتعلّــم الذاتي.
            </Typography>

            {/* Paragraph 2 */}
            <Typography
              variant="body2"
              //   color="text.secondary"
              sx={{ mb: 2, ...typography.description }}
            >
              نهدف لأن تكون المنصة جسـرًا رقميًـا ملهمًـا، يمكّن الأطفـــال
              والمراهقين من استكشاف عالــم لغــة الإشارة بطريقـة شيّقة،
              ويمنحهــم شعــورًا بالتمكيــن والانتمــاء، ويحفّزهــم على
              التعبيــر عن أنفسهم بحريــة وتطوير مهــارات التواصل. كما تولي
              المنصة أهمية كبيرة لدور الأهل، فتزوّدهم بالأدوات، الموارد،
              والإرشــادات التي تعزز ثقتــهم، وتتيح لهم متابعــة تقدم أبنائهــم
              ومساندتهم في كل خطــوة من رحلتهــم التعليميــة.
            </Typography>

            {/* Bullets aligned to the right with bold labels */}
            <Stack spacing={1.2} sx={{ mb: 3, textAlign: "right" }}>
              {[
                {
                  label: "ألعاب تعليمية ومغامرات:",
                  text: " أنشطة مسلية ومرحة تعزز التعلم والفهم لدى الأطفال",
                },
                {
                  label: "متابعة الأهل:",
                  text: " أدوات لتتبع تقدم أطفالهم والمشاركة في رحلتهــم التعليميــة.",
                },
                {
                  label: "مجتمع آمن وتفاعلي:",
                  text: " مساحة للتواصل بين الأطفال والمراهقين الصم مع أقرانهم",
                },
                {
                  label: "شهادات إنجاز:",
                  text: " تعزيــز الثقة بالنفس وتشجيــع التعلــم المستمر.",
                },
              ].map((item) => (
                <Stack
                  key={item.label}
                  direction="row-reverse"
                  spacing={1}
                  alignItems="center"
                  sx={{ justifyContent: "end" }}
                >
                  <CheckCircleIcon sx={{ color: "rgba(255, 127, 80, 1)" }} />
                  <Typography variant="body2">
                    <Typography component="span" sx={{ fontWeight: 700 }}>
                      {item.label}
                    </Typography>
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* Buttons: both with left-side arrows in RTL */}
            <Stack
              direction="row-reverse"
              spacing={2}
              sx={{ justifyContent: "flex-start" }}
            >
              <Button
                variant="contained"
                startIcon={<ArrowLeftIcon size={16} />}
                sx={{
                  backgroundColor: "#146BA6",
                  px: 3,
                  "&:hover": { backgroundColor: "#0f588a" },
                }}
              >
                اعرف المزيد
              </Button>
              <Button
                variant="contained"
                startIcon={<ArrowLeftIcon size={16} />}
                sx={{
                  backgroundColor: "#27AE60",
                  color: "#fff",
                  px: 3,
                  "&:hover": { backgroundColor: "#1f9a55" },
                }}
              >
                المسارات
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
