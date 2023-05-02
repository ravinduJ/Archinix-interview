import { Box,Card, CardActions, CardMedia, Typography } from "@mui/material";
import React from "react";

const CardCatergory = (props) => {
  const { labal, bgImage } = props;
  return (
    <Card sx={{ height: 250, width: 405, borderRadius: 2}}>
      <CardMedia sx={{ height: "100%", width: "100%" }} image={bgImage}>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "flex-end",
            height: 230,
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                color: "#FFF",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize:25
              }}
            >
              {labal}
            </Typography>
          </Box>
        </CardActions>
      </CardMedia>
    </Card>
  );
};

export default CardCatergory;
