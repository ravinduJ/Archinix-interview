import { Box, Button, Card, CardActions, CardMedia, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PopularBrandCard = (props) =>{
    const {labal, bgImage}=props;
    return(
        <Card   sx={{ height: 650, width: 400, borderRadius: 2, boxShadow:10 }}>
        <CardMedia
          sx={{ height: "100%", width: "100%" }}
          image={bgImage}
  
        >
          <CardActions
            sx={{
              display: "flex",
              alignItems: "flex-end",
              height: 600,
              justifyContent: "center",
            }}
          >
            <Box sx={{ textAlign: "center", maxWidth:200}}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize:25,
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
                  borderRadius: "0",
                }}
                variant="outlined"
              >
                Shop Now
              </Button>
            </Box>
          </CardActions>
        </CardMedia>
        </Card>
    )
}

export default PopularBrandCard;