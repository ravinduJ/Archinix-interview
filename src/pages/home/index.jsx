import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./styles/home.scss";
import images from "../../assets/images";
import GridCardPortrait from "../../components/Cards/GridCardPortrait";
import GridCardLandscape from "../../components/Cards/GridCardLandscape";
import { Container } from "@mui/material";
import PopularBrandCard from "../../components/Cards/PopularBrandCard";
import SubHeading from "./components/SubHeading";
import Carousel from "../../components/UI/Carousel";
import CardSlider from "../../components/Cards/CardSlider";
import CardCatergory from "../../components/Cards/CardCategory";

const Home = () => {
  return (
    <>
    {/* Slide Show */}
      <Carousel />

      {/* Shop by Collections */}
      <Box mt={8} mb={8}>
        <SubHeading text="shop by collections" />

        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <div class="c-grid">
            <div class="child">
              <GridCardPortrait labal="partywear" bgImage={images.partywear} />
            </div>
            <div class="child">
              <GridCardLandscape
                labal="bridal/wedding"
                bgImage={images.landscapeimg}
              />
            </div>
            <div class="child">
              <GridCardPortrait labal="partywear" bgImage={images.partywear} />
            </div>
            <div class="child">
              <GridCardPortrait labal="partywear" bgImage={images.partywear} />
            </div>
            <div class="child">
              <GridCardPortrait labal="partywear" bgImage={images.partywear} />
            </div>
            <div class="child">
              <GridCardLandscape
                labal="bridal/wedding"
                bgImage={images.landscapeimg}
              />
            </div>
          </div>
        </Box>
      </Box>

      <Box mt={8} mb={8}>
        <SubHeading text="popular brands" />
        <Box mt={8}>
          <Container>
            <CardSlider />
          </Container>

          <Grid container justifyContent={"center"} spacing={1} mt={3} mb={3}>
            <Grid item>
              <PopularBrandCard
                labal="Jewelery and accessories"
                bgImage={images.partywear}
              />
            </Grid>

            <Grid item>
              <PopularBrandCard
                labal="blouses and crop tops"
                bgImage={images.partywear}
              />
            </Grid>

            <Grid item>
              <PopularBrandCard
                labal="Stoles and dupattas"
                bgImage={images.partywear}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#EEEEEE", pb: 6, pt: 4 }}>
        <SubHeading text="popular categories" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div class="box-set">
            <CardCatergory
              class="box"
              labal="kanjivaram hald fine sarees"
              bgImage={images.landscapeimg}
            />
            <CardCatergory
              class="box"
              labal="kanjivaram hald fine sarees"
              bgImage={images.landscapeimg}
            />
            <CardCatergory
              class="box"
              labal="kanjivaram hald fine sarees"
              bgImage={images.landscapeimg}
            />
            <CardCatergory
              class="box"
              labal="kanjivaram hald fine sarees"
              bgImage={images.landscapeimg}
            />
            <CardCatergory
              class="box"
              labal="kanjivaram hald fine sarees"
              bgImage={images.landscapeimg}
            />
            <CardCatergory
              class="box"
              labal="kanjivaram hald fine sarees"
              bgImage={images.landscapeimg}
            />
          </div>
        </Box>
      </Box>

      <Box mt={8}>
        <Grid container alignItems="center" justifyContent={"space-evenly"} spacing={3}>
          <Grid item>
            <Box>
              <h1>About Our </h1>
              <h1>Weaves </h1>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Box sx={{ display: "flex", width: 100, mt: -1 }}>
                  <hr className="front-line" />
                  <hr className="back-line" />
                </Box>
              </Box>
            </Box>

            <p>
              Welcome to our Kumaran Silks Family, a family so rich in silk{" "}
              <br />
              heritage for over hundreds of years. Our retail history traces
              back <br /> to 1955 when Shri. P. C. Chengalvaraya Chettiar and
              his son Shri. <br /> P. C. RamaMurthy established this entity on a
              small scale in <br /> Chennai. They gradually transformed it into
              a massive retail unit <br /> in textiles spreading over 75,000
              square feet, making it one of the <br /> largest textile outlets
              in India within a span of 20 years.
            </p>

            <p>
              Since we hail from a silk weaving community in Kanchipuram, <br />
              inheriting exceptional knowledge in silks, we believe in producing
              <br /> the purest drapes with inimitable designs without
              compromise in <br />
              quality as a mark of respect to our ancestry.{" "}
            </p>
          </Grid>
          <Grid item >
            <Box className="about-img-wrapper">
              <Box className="about-img-wrapper-child-1">
                <img src={images.partywear} alt="img" style={{objectFit:"cover", width:190, height:"80%" ,borderRadius:3}} />
              </Box>
              <Box className="about-img-wrapper-child-2">
                <img src={images.partywear} alt="img" style={{objectFit:"cover", width:190, height:"100%", borderRadius:3}} />
              </Box>
              <Box className="about-img-wrapper-child-3">
                <img src={images.partywear} alt="img" style={{objectFit:"cover", width:220, height:"80%", borderRadius:3}} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className="subscribe-wrapper" mt={8}>
        <Box>
          <Box ml={5}>
            <h2 className="subscribe-heading">Subscribe to our newsletter</h2>
            <p className="subscribe-txt">
              Stay stylish and never miss a deal. Subscribe to our newsletter
              for exclusive offers. <br /> trend update, and fashion tips
              delivered straingt to your inbox
            </p>

            <div className="form-wrap">
              <input
                type="text"
                placeholder="Enter your email address"
                className="email-input"
              />
              <button className="button">Subscribe</button>
            </div>
          </Box>

          <Box className="subscribe-img-wrapper">
            <img src={images.subscribe} alt="logo" className="subscribe-img" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
