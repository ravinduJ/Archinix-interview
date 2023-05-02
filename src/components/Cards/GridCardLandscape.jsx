import React from "react";
import { Box, Button, Card, CardActions, CardMedia, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";



const GridCardLandscape = (props) => {
    const {bgImage, labal } = props;
    return(
        <Card sx={{ Height: 450, Width: 580, borderRadius: 0, boxShadow: "none" }}>
        <CardMedia
          sx={{ height: "100%", width: "100%" }}
          image={bgImage}
  
        >
          <CardActions
            sx={{
              display: "flex",
              alignItems: "flex-end",
              height: 450,
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={2} sx={{ alignItems:'center'}}>
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
                 sx={{
                  textTransform: "none",
                  color: "#FFF",
                  borderColor: "#FFF",
                  borderRadius: 0,
                }}
                variant="outlined"
              >
                Shop Now
              </Button>              
            </Stack>
          </CardActions>
        </CardMedia>
      </Card>
    )
}

export default GridCardLandscape;