import { Box, Typography } from "@mui/material";
import React from "react";
import "../styles/SubHeading.scss"

const SubHeading = (props) => {
  const { text } = props;
  return (
    <Box>
      <Typography
        sx={{
          color: "black",
          fontFamily: "sans-serif",
          fontSize: 28,
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing:2.8
        }}
      >
        {text}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", width: 100, mt:-1}}>
          <hr className="front-line" />
          <hr className="back-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default SubHeading;
