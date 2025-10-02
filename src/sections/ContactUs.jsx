import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  TextField,
  Button,
  InputAdornment,
  Avatar,
  Alert,
  CircularProgress,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useSelector, useDispatch } from 'react-redux'
import { updateField, submitContactForm, clearForm, resetSubmitStatus } from '../store/slices/contactSlice'
import { useEffect } from 'react'

const BLUE = "rgba(0, 105, 204, 1)";

export default function ContactUs() {
  const dispatch = useDispatch()
  const { formData, errors, isSubmitting, submitStatus, submitMessage } = useSelector((state) => state.contact)

  const handleFieldChange = (field) => (event) => {
    dispatch(updateField({ field, value: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    debugger
    // Basic validation
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'الاسم الأول مطلوب'
    if (!formData.lastName.trim()) newErrors.lastName = 'الاسم الآخر مطلوب'
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'البريد الإلكتروني غير صحيح'
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب'
    if (!formData.message.trim()) newErrors.message = 'الرسالة مطلوبة'

    if (Object.keys(newErrors).length > 0) {
      // Handle validation errors
      return
    }
debugger
    dispatch(submitContactForm(formData))
  }

  // Clear success message after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        dispatch(resetSubmitStatus())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus, dispatch])

  return (
    <Box sx={{ py: 8, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 4,
            alignItems: "start",
          }}
        >
          {/* Left: Form card */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: "8px",
                backgroundColor: BLUE,
                color: "#fff",
                height: "100%",
                textAlign: "right",
              }}
            >
              <Box sx={{ textAlign: "right", mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: "1.5rem" }}>
                  نموذج التواصل
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  نحن هنا من أجلك، لا تتردد في التواصل معنا
                </Typography>
              </Box>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 2, textAlign: 'right' }}>
                  {submitMessage}
                </Alert>
              )}
              {submitStatus === 'error' && (
                <Alert severity="error" sx={{ mb: 2, textAlign: 'right' }}>
                  {submitMessage}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ mb: 1, color: "#fff" }}>
                      الاسم الأول
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ادخل الاسم الأول"
                      value={formData.firstName}
                      onChange={handleFieldChange('firstName')}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      InputProps={{
                        sx: {
                          backgroundColor: "#fff",
                          borderRadius: 1,
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: errors.firstName ? "#f44336" : "#e0e0e0",
                          },
                          "& input": { textAlign: "right" },
                          "& input::placeholder": { textAlign: "right" },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ mb: 1, color: "#fff" }}>
                      الاسم الآخر
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ادخل الاسم الآخر"
                      value={formData.lastName}
                      onChange={handleFieldChange('lastName')}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      InputProps={{
                        sx: {
                          backgroundColor: "#fff",
                          borderRadius: 1,
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: errors.lastName ? "#f44336" : "#e0e0e0",
                          },
                          "& input": { textAlign: "right" },
                          "& input::placeholder": { textAlign: "right" },
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ mb: 1, color: "#fff" }}>
                      البريد الإلكتروني
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ادخل عنوان البريد الإلكتروني"
                      value={formData.email}
                      onChange={handleFieldChange('email')}
                      error={!!errors.email}
                      helperText={errors.email}
                      InputProps={{
                        sx: {
                          backgroundColor: "#fff",
                          borderRadius: 1,
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: errors.email ? "#f44336" : "#e0e0e0",
                          },
                          "& input": { textAlign: "right" },
                          "& input::placeholder": { textAlign: "right" },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ mb: 1, color: "#fff" }}>
                      رقم الهاتف المحمول
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ادخل رقم الهاتف المحمول"
                      value={formData.phone}
                      onChange={handleFieldChange('phone')}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      InputProps={{
                        sx: {
                          backgroundColor: "#fff",
                          borderRadius: 1,
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: errors.phone ? "#f44336" : "#e0e0e0",
                          },
                          "& input": { textAlign: "right" },
                          "& input::placeholder": { textAlign: "right" },
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ mb: 1, color: "#fff" }}>
                    الرسالة
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="...اكتب رسالتك هنا"
                    value={formData.message}
                    onChange={handleFieldChange('message')}
                    error={!!errors.message}
                    helperText={errors.message}
                    InputProps={{
                      sx: {
                        backgroundColor: "#fff",
                        borderRadius: 1,
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors.message ? "#f44336" : "#e0e0e0",
                        },
                        "& textarea": { textAlign: "right" },
                        "& textarea::placeholder": { textAlign: "right" },
                      },
                    }}
                  />
                </Box>

                <Box sx={{ mt: 2 ,textAlign: "left"}}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: "rgba(64, 181, 173, 1)",
                      transition: "all 0.3s ease",
                      "&:hover": { 
                        backgroundColor: "#1f9a55",
                        transform: "scale(1.02)"
                      },
                      p:"9px 35px",
                      borderRadius: 1,
                      width: "fit-content",
                      
                    }}
                  >
                    {isSubmitting ? (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CircularProgress size={20} color="inherit" />
                        <Typography>جاري الإرسال...</Typography>
                      </Stack>
                    ) : (
                      'إرسال'
                    )}
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Right: Content and contact items */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", mb: 2, justifyContent: "end" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#146BA6",
                      borderRadius: "50%",
                    }}
                  />
                  <Box
                    sx={{
                      height: "2px",
                      width: "36px",
                      backgroundColor: "#146BA6",
                      borderRadius: "4px",
                    }}
                  />
                </Box>
                <Typography
                  variant="overline"
                  sx={{ color: BLUE, fontWeight: 600, fontSize:"0.80rem" }}
                >
                  تواصل معنا
                </Typography>
              </Stack>

              <Typography
                variant="h5"
                sx={{ fontWeight: 800, mb: 2, textAlign: "right", fontSize: "1.5rem" }}
              >
                تواصلك معنا أول خطوات النجاح
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#64748b",
                  mb: 4,
                  textAlign: "right",
                  lineHeight: 1.6,
                }}
              >
                نؤمن أن التواصل هو مفتاح كل تطور، وأن رحلة التمكين تبدأ دائماً
                بخطوة صغيرة بسؤال، باستفسار أو حتى بفكرة طموحة منك.
              </Typography>

              <Stack spacing={3}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ justifyContent: "flex-end" }}
                >
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                      البريد الإلكتروني
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      info@bnan.com
                    </Typography>
                  </Box>
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      border: `2px solid rgba(64, 181, 173, 1)`,
                      backgroundColor: "rgba(64, 181, 173, 1)",
                      color: "#fff",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <EmailOutlinedIcon />
                  </Avatar>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ justifyContent: "flex-end" }}
                >
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                      الهاتف المحمول
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      (+966) 000 000 000
                    </Typography>
                  </Box>
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      border: `2px solid rgba(64, 181, 173, 1)`,
                      backgroundColor: "rgba(64, 181, 173, 1)",
                      color: "#fff",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <PhoneInTalkOutlinedIcon />
                  </Avatar>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ justifyContent: "flex-end" }}
                >
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                      الموقع
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      دمشق - سوريا
                    </Typography>
                  </Box>
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      border: `2px solid rgba(64, 181, 173, 1)`,
                      backgroundColor: "rgba(64, 181, 173, 1)",
                      color: "#fff",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <LocationOnOutlinedIcon />
                  </Avatar>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}