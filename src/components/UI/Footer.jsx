import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import PhoneIcon from "@mui/icons-material/Phone";

//style
import "../styles/Footer.scss";
import { Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import images from "../../assets/images";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";

//images
// import footerLogo from "../../assets/images/aytra-logo.png";

export default function JoinProvider() {
  return (
    <Box>
      <Grid
        container
        direction="row"
        // justifyContent="space-between"
        sx={{
          borderTop: "2px solid #E9E8E8",
          padding: { xs: "25px 0", sm: "25px 0", md: "35px 0" },
          backgroundColor: "#f5f5f7",
        }}
      >
        {/* Links */}
        <Grid item md={3}>
          <Box sx={{ m: 2 }}>
            <hr />
            <Typography
              variant="body1"
              sx={{
                // fontFamily: "sans-serif",
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Links
            </Typography>

            <Box sx={{ mt: 2, mb: 4 }}>
              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  About us
                </Typography>
              </Link>

              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                    pt: 1,
                  }}
                >
                  Delivery Informaiton
                </Typography>
              </Link>

              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                    pt: 1,
                  }}
                >
                  Privacy Policy
                </Typography>
              </Link>

              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                    pt: 1,
                  }}
                >
                  Terms & Conditions
                </Typography>
              </Link>

              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                    pt: 1,
                  }}
                >
                  Return Policy
                </Typography>
              </Link>
            </Box>

            <Grid
              container
              justifyContent={"center"}
              sx={{ bgcolor: "#E9E8E8", p: 1, borderRadius: 2 }}
            >
              <Grid item sx={{ display: "flex", alignItems: "center", p: 1 }}>
                <LocationOnIcon sx={{ fontSize: 35 }} />
              </Grid>

              <Grid item>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: "sans-serif" }}
                  >
                    No.12, Nageswaran Road, Oppa to Panagal
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: "sans-serif" }}
                  >
                    ParkT,Nagar, Chennai - 6
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: "sans-serif" }}
                  >
                    Tamil Nadu, INDIA
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Middle Section */}
        <Grid item md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={images.logo} alt="logo" className="footer-middle-logo" />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="subtitle2"
              sx={{ lineHeight: 2, lineBreak: "strict" }}
            >
              Kumaran Silks offers affordable Indian ethnic wear, collabarates
              with weavers to create unique collections
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ lineHeight: 2, lineBreak: "strict" }}
            >
              that celebrates India's textitle traditions, and provides a
              seamless shopping experiance for customers{" "}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ lineHeight: 2, lineBreak: "strict" }}
            >
              worldwide
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" ,mt:2}}>
            <Paper className="social-media-icons-wrap" elevation={3}>
              <InstagramIcon sx={{ fontSize: 30 }} />
            </Paper>

            <Paper className="social-media-icons-wrap" elevation={3}>
              <FacebookIcon sx={{ fontSize: 30 }} />
            </Paper>

            <Paper className="social-media-icons-wrap" elevation={3}>
              <PinterestIcon sx={{ fontSize: 30 }} />
            </Paper>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 120,
            }}
          >
            <Box sx={{ width: 300 }}>
              <Grid
                container
                justifyContent={"center"}
                sx={{ bgcolor: "#E9E8E8", p: 2, borderRadius: 2 }}
              >
                <Grid item sx={{ display: "flex", alignItems: "center", p: 1 }}>
                  <PhoneIcon sx={{ fontSize: 35 }} />
                </Grid>

                <Grid item>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ fontFamily: "sans-serif" }}
                    >
                      Online Department
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "sans-serif",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      +94 -44-24348844
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Account */}
        <Grid item md={3}>
          <Box sx={{ m: 2 }}>
            <hr />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              Account
            </Typography>

            <Box sx={{ mt: 2, mb: 4 }}>
              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  My Account
                </Typography>
              </Link>

              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                    pt: 1,
                  }}
                >
                  Order History
                </Typography>
              </Link>

              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                    pt: 1,
                  }}
                >
                  Wish List
                </Typography>
              </Link>

              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                    pt: 1,
                  }}
                >
                  Terms & Conditions
                </Typography>
              </Link>

              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    textAlign: "center",
                    pt: 1,
                  }}
                >
                  Contact us
                </Typography>
              </Link>
            </Box>

            <Box sx={{ width: 300 }}>
              <Grid
                container
                justifyContent={"center"}
                sx={{ bgcolor: "#E9E8E8", p: 2, borderRadius: 2 }}
              >
                <Grid item sx={{ display: "flex", alignItems: "center", p: 1 }}>
                  <PhoneIcon sx={{ fontSize: 35 }} />
                </Grid>

                <Grid item>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ fontFamily: "sans-serif" }}
                    >
                      Online Department
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "sans-serif",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      +94 -44-24348844
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, mb: 3, textAlign: "center" }}>
        <Typography variant="subtitle1" sx={{ fontFamily: "sans-serif" }}>
          We accept
        </Typography>

        <Box sx={{ textAlign: "center" }}>
          <img src={images.paypal} alt="paypal" className="footer-logos" />
          <img src={images.master} alt="paypal" className="footer-logos" />
          <img src={images.visa} alt="paypal" className="footer-logos" />
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#212A3E", textAlign: "center", p: 1 }}>
        <Typography
          variant="caption"
          sx={{ color: "#FFF", fontFamily: "sans-serif" }}
        >
          &copy; 2023 Kumaran Silks. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
