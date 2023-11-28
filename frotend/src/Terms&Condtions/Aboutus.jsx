import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="CricketWeapon"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                About Us
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                Welcome to PulseCart, where shopping meets excitement! At PulseCart, we're more than just an online marketplace; we're a vibrant community dedicated to curating an electrifying shopping experience for you.
                Our journey began with a simple idea: to infuse energy into every purchase. PulseCart is not just a platform; it's a pulsating marketplace where style, innovation, and quality converge. We believe that shopping should be an exhilarating adventure, and we've crafted PulseCart to reflect that passion.
                Discover a world of possibilities as you explore our carefully curated selection of products. From cutting-edge electronics to fashion-forward apparel, we've handpicked items that resonate with the pulse of today's trends. PulseCart is your go-to destination for the latest, the coolest, and the most exciting finds.
                But PulseCart is more than just a collection of products; it's a celebration of individuality and expression. We understand that each purchase tells a unique story, and we're here to help you script yours. Our commitment to customer satisfaction goes beyond the transaction – it's about ensuring that every interaction with PulseCart leaves you energized and satisfied.".
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                At the heart of PulseCart is a team of passionate individuals who are dedicated to bringing you the best in every category. We believe in innovation, reliability, and a touch of the extraordinary. Your satisfaction is our priority, and we strive to make every moment spent on PulseCart a thrilling experience.
                Join us on this exhilarating journey. PulseCart is not just a marketplace; it's a dynamic community of trendsetters, tech enthusiasts, and fashion mavens. Whether you're here for the latest gadgets or the trendiest fashion pieces, PulseCart is your pulse on the hottest trends.
                Thank you for choosing PulseCart – where the beat of innovation meets the rhythm of style. Shop with us and experience the pulse of excitement!
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            At PulseCart, we are innovators at heart. Our team comprises tech enthusiasts, trendsetters, and forward-thinkers who are dedicated to bringing you the latest and greatest in the world of online shopping. We believe in pushing boundaries and staying ahead of the curve, ensuring that PulseCart is not just a marketplace but a hub of innovation.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            As curators of style, we meticulously handpick products that reflect the pulse of contemporary trends. From fashion-forward apparel to cutting-edge electronics, our selection is a curated blend of what's hot, what's trending, and what's simply irresistible. PulseCart is your go-to destination for style that speaks volumes.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            More than just a platform, PulseCart is a community of excitement. Join a dynamic network of shoppers who share your passion for the extraordinary. Every purchase is not just a transaction; it's a shared experience of energy, enthusiasm, and the joy of discovery. PulseCart is where the thrill of shopping comes to life.
          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          At PulseCart, our mission is clear - to empower your pulse. We strive to go beyond the conventional online shopping experience, curating a platform that resonates with excitement and energy. Our commitment is to provide a dynamic marketplace where innovation meets style, offering products that elevate your pulse and enhance your lifestyle.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          We aim to elevate every interaction you have with PulseCart. Whether you're exploring the latest tech gadgets or diving into fashion trends, our mission is to ensure that each moment spent on our platform is a thrilling and satisfying experience. PulseCart is more than a destination; it's a mission to infuse joy, excitement, and innovation into every facet of your shopping journey.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
