import React from "react";
import { Card, CardMedia } from "@mui/material";

const CardBrand = (props) => {
  const { bgImage } = props;
  return (
    <Card sx={{ height: 130, width: 280, borderRadius: 2 }}>
      <CardMedia
        sx={{ height: "100%", width: "100%" }}
        image={bgImage}
      ></CardMedia>
    </Card>
  );
};

export default CardBrand;