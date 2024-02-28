import React, { useState } from "react";
import {
  AppBar,
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
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import "../css/header.css";
const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down("md"));

  const toggleSignButtons = () => {
    console.log("ooooo");
    const sign__buttons =
      document.querySelector<HTMLElement>(".sign_in_up__tabs")?.style;
    if (sign__buttons?.display === "none") sign__buttons.display = "flex";
    else if (sign__buttons === undefined) return;
    else sign__buttons.display = "none";
  };

  return (
    <React.Fragment>
      <AppBar
        className="app__bar"
        sx={{
          left: "0",
          margin: "5px auto",
          justifyContent: "center",
          backgroundColor: "#F6F6F6",
          height: "60px",
          borderRadius: "15px",
          width: { xs: "auto", md: "420px" },
          border: "1px solid lightgray",
        }}
      >
        <Toolbar>
          <IconContext.Provider
            value={{ className: "shared-class", size: "18" }}
          >
            <Tabs
              style={{ height: "60px", margin: "auto", }}
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
      <div
        style={{
          padding: "17px",
          float: "right",
          position: "fixed",
          right: "10px",
          top: "0",
          display: "flex",
          zIndex: "10",
        }}
      >
        <CgProfile size={30} onClick={toggleSignButtons} />
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
