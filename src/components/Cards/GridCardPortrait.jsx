import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const GridCardPortrait = (props) => {
  const { labal, bgImage} = props;
  return (
    <Card   sx={{ height: 450, width: 300, borderRadius: 0, boxShadow: "none" }}>
      <CardMedia
        sx={{ height: "100%", width: "100%" }}
        image={bgImage}

      >
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            height: 450 ,
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
              }}
            >
              {labal}
            </Typography>
            <Button
              endIcon={<ArrowRightAltIcon />}
              size="large"
              sx={{
                textTransform: "none",
                color: "#FFF",
                borderColor: "#FFF",
                borderRadius: "0",
              }}
              variant="outlined"
            >
              Shop Now
            </Button>
          </Box>
        </CardActions>
      </CardMedia>

      {/*  */}
    </Card>
  );
};

export default GridCardPortrait;
