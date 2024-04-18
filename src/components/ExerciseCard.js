import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link
    className="exercise-card1"
    to={`/exercise/${exercise.id}`}
    style={{ textDecoration: "none" }}
  >
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button
        component="div"
        sx={{
          ml: "21px",
          color: "#ecf000",
          background: "#050505",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
          textDecoration: "none",
          "&:hover": {
            background: "#ecf000", // Promjena pozadine na hover
            color: "#050505", // Promjena boje teksta na hover
          },
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "#ecf000",
          background: "#050505",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
          "&:hover": {
            background: "#ecf000", // Promjena pozadine na hover
            color: "#050505", // Promjena boje teksta na hover
          },
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
