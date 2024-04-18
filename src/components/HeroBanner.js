import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import styles from "../App.css";
import HeroBannerImage from "../assets/images/ss2.png";
import { useTheme } from "../theme-context/ThemeContext";

const HeroBanner = () => {
  const { theme } = useTheme();
  return (
    <Box
      sx={{ mt: { lg: "152px", xs: "20px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography
        className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}
        // color="#131413"
        fontWeight="600"
        fontSize="26px"
        style={{ marginTop: "-50px" }}
      >
        TRAIN INSAIYAN FITNESS
      </Typography>
      <Typography
        className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="10px"
        style={{ marginTop: "-10px" }}
      >
        Train Insane <br />
        or Remain the Same
      </Typography>
      <Typography
        className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        style={{ marginTop: "-30px" }}
      >
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <Button
          href="#exercises"
          sx={{
            bgcolor: theme === "dark" ? "#050505" : "#ebe71e",
            color: theme === "dark" ? "#ebe71e" : "#050505",
            textTransform: "none",
            marginLeft: "20px",
            width: { lg: "193px", xs: "80px" },
            height: "56px",
            position: "absolute",
            left: "0px", // Changed from "right" to "left"
            fontSize: { lg: "20px", xs: "14px" },
            "&:hover": {
              bgcolor: theme === "dark" ? "#ebe71e" : "#050505",
              color: theme === "dark" ? "#050505" : "#ebe71e",
            },
          }}
        >
          Explore Exercises
        </Button>
      </Stack>
      <Typography
        fontWeight={600}
        color="black"
        sx={{
          opacity: "0.3",
          display: { lg: "block", xs: "none" },
          fontSize: "130px",
        }}
        style={{ marginTop: "50px" }}
      >
        TRAIN <br />
        INSANE
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
        style={{ maxWidth: "100%", marginTop: "-220px", height: "100%" }}
      />
    </Box>
  );
};

export default HeroBanner;
