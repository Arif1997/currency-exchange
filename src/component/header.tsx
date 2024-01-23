import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IoMdHome } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiAccountBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "../css/header.css";
const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down("md"));

  const toggleSignButtons = () => {
    const sign__buttons =
      document.querySelector<HTMLElement>(".sign_in_up__tabs")?.style;
    if (sign__buttons?.display === "none") sign__buttons.display = "flex";
    else if (sign__buttons === undefined) return;
    else sign__buttons.display = "none";
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <AppBar
          className="app__bar"
          sx={{
            left: "0",
            margin: "auto",
            justifyContent: "center",
            backgroundColor: "#F6F6F6",
            height: "60px",
            borderRadius: "15px",
            width: "420px",
          }}
        >
          <Toolbar sx={{ minHeight: { xs: "0px", md: "0px" } }}>
            <IconContext.Provider
              value={{ className: "shared-class", size: "20" }}
            >
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(_e: React.SyntheticEvent<Element, Event>, value) =>
                  setValue(value)
                }
                className="header__tabs"
              >
                <Tab label="Home" icon={<IoMdHome />} component={Link} to="/" />
                <Tab
                  label="Send Money"
                  icon={<FaTelegramPlane />}
                  component={Link}
                  to="/transfer"
                />
                <Tab
                  label="About"
                  icon={<HiUserGroup />}
                  component={Link}
                  to="/about"
                />
                <Tab
                  label="Contact"
                  icon={<BsFillTelephoneFill />}
                  component={Link}
                  to="/contact"
                />
              </Tabs>
            </IconContext.Provider>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <button
          onClick={toggleSignButtons}
          style={{
            width: "90px",
            padding: "12px",
            float: "right",
            position: "fixed",
            right: "10px",
            top: "0",
            background: "lightgray",
            fontSize: "12px",
            fontWeight: "400",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "50px",
          }}
        >
          <RiAccountBoxLine size={20} />
        </button>
      </div>

      <div className="sign_in_up__tabs" style={{ zIndex: "10" }}>
        <Button
          variant="contained"
          sx={{ marginLeft: "auto" }}
          onClick={toggleSignButtons}
        >
          <Link to={"/signin"}>Sign in</Link>
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: "10px" }}
          onClick={toggleSignButtons}
        >
          <Link to={"/signup"}>Sign Up</Link>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Header;
