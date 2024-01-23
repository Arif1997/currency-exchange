import "../css/footer.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {
  Facebook,
  Instagram,
  Twitter,
  Email,
  LinkedIn,
} from "@mui/icons-material";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        mt: "50px",
        pt: "60px",
        pb: "40px",
        width: "100%",
        borderTop: "1px solid lightgrey",
        position: "static",
        bottom: "0",
        left: "0",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
              }}
            >
              <img
                src="/images/usa_flag.png"
                alt="Afghan Transfer Logo"
                width={"45px"}
                height={"45px"}
                style={{ marginRight: "20px" }}
              />{" "}
              <span style={{ fontSize: "20px", fontWeight: "600" }}>
                Afghan Transfer
              </span>
            </div>
            <p style={{ fontSize: "0.8rem" }}>
              Download the app by clicking the link below :
            </p>
            <Typography variant="body2" color="text.secondary">
              <Link href="#">
                <img
                  src="/images/get__it__on__gp.png"
                  alt="google play logo"
                  height={"40px"}
                  width={"110px"}
                  style={{ margin: "10px" }}
                />
              </Link>
              <Link href="#">
                <img
                  src="/images/get__it__on__app__store.png"
                  alt="app store logo"
                  height={"40px"}
                  width={"110px"}
                  style={{ margin: "10px" }}
                />
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} textAlign={"left"}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Pages
            </Typography>
            <ul
              style={{
                listStyle: "none",
                lineHeight: "1.8",
                padding: "0",
                margin: "0",
              }}
            >
              <li>Home</li>
              <li>Send money</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Sign in</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={2} textAlign={"left"}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Services
            </Typography>
            <ul
              style={{
                listStyle: "none",
                lineHeight: "1.8",
                padding: "0",
                margin: "0",
              }}
            >
              <li>Money Transfer</li>
              <li>Currency Exchange</li>
              <li>Send Through Office</li>
              <li>Send Online</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3} textAlign={"left"}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <ul
              style={{
                listStyle: "none",
                textAlign: "left",
                marginLeft: "-30px",
              }}
              className="contact__list"
            >
              <li>
                <BsFillTelephoneFill /> +917276386237
              </li>
              <li>
                <Link href="https://www.facebook.com/" color="inherit">
                  <Email /> ar.fakorizada@gmail.com
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/" color="inherit">
                  <MdLocationPin size="25px" color="gray" />
                  2972 Westheimer Rd. Santa Ana,
                  <br />
                  Illinois 85486
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={2} marginTop={"50px"}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
            <Link href="#" color={"inherit"}>
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://smartsydney.org">
              Smart Sydney
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
