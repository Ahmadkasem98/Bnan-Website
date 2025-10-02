import { Box, IconButton, Container } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import heroImage from "../assets/Screenshot (14).png";

export default function Hero() {
  return (
    <Box className="bg-white py-6">
      <Container style={{ padding: "20px" }}>
        <Box className="relative mx-auto w-full md:w-[1248px] h-[540px] md:h-[540px] overflow-hidden rounded-lg">
          <img
            src={heroImage}
            alt="video cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </Box>
      </Container>
    </Box>
  );
}
