import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import Logo from "../assets/images/logo1.png";
import FunctionContext from "../theme-context/FunctionTheme";

const Navbar = () => {
  const handleScrollToExercises = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "20px", xs: "-1px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "100px", height: "100px", marginLeft: "50px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <a
          href="/"
          style={{
            textDecoration: "none",
            fontFamily: "Alegreya",
            marginTop: "-20px",
          }}
        >
          <Typography
            fontSize="22px"
            fontFamily="Alegreya"
            lineHeight="35px"
            color="yellow"
            style={{
              marginTop: "-30px",
            }}
          >
            Home
          </Typography>
        </a>
        <a
          onClick={handleScrollToExercises}
          href="#exercises"
          color="yellow"
          style={{
            textDecoration: "none",
            marginTop: "-20px",
          }}
        >
          <Typography
            fontSize="22px"
            fontFamily="Alegreya"
            lineHeight="35px"
            color="yellow"
            style={{
              marginTop: "-30px",
            }}
          >
            Exercises
          </Typography>
        </a>
      </Stack>
      <FunctionContext />
    </Stack>
  );
};

export default Navbar;
