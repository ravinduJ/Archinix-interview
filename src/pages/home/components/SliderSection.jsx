import React from "react";
import Box from "@mui/material/Box";
import CardSlider from "../../../components/Cards/CardSlider";
export default function SliderSection(props) {
  return (
    <>     
      <Box sx={{ position: "relative" }}>
        <CardSlider />
      </Box>
    </>
  );
}
