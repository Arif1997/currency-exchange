import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import { Paper, styled } from "@mui/material";
import {
  AdminPanelSettings,
  CurrencyExchange,
  LocalAtm,
  PaymentOutlined,
  StoreMallDirectory,
} from "@mui/icons-material";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import OutboundIcon from "@mui/icons-material/Outbound";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserList from "./dashboard/user.list";
import Currency from "./dashboard/currency.list";
import PayIn from "./dashboard/pay.in";
import PayOut from "./dashboard/pay.out";
import { Admin } from "./dashboard/admin";
import Store from "./dashboard/store";
import { ExchangeRates } from "./dashboard/exchange.rates";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const drawerWidth = 240;
interface ItemContent {
  [key: string]: any;
}

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");
  const itemContent: ItemContent = {
    Inbox: "",
    Transactions: "Transactions content",
    "Pay Ins": <PayIn />,
    "Pay Outs": <PayOut />,
    "Exchange Rates": <ExchangeRates />,
    Admins: <Admin />,
    Currencies: <Currency />,
    Stores: <Store />,
    Users: <UserList />,
  };
  const icons = [
    <InboxIcon />,
    <SwapVerticalCircleIcon />,
    <PaymentOutlined />,
    <OutboundIcon />,
    <CurrencyExchange />,
    <AdminPanelSettings />,
  ];
  const handleItemClick = (text: string) => {
    setSelectedItem(text);
  };

  const utilIcons = [
    <LocalAtm />,
    <StoreMallDirectory />,
    <AccountCircleIcon />,
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          "Inbox",
          "Transactions",
          "Pay Ins",
          "Pay Outs",
          "Exchange Rates",
          "Admins",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleItemClick(text)}>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Currencies", "Stores", "Users"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleItemClick(text)}>
              <ListItemIcon>{utilIcons[index]}</ListItemIcon>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: "70px",
          borderRadius: "10px",
          background: "darkgrey",
        }}
      >
        <Toolbar sx={{ display: { sm: "none", xs: "block" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: "block", m: "5px" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          maxWidth: { sm: `calc(100vw - ${drawerWidth}px)` },
        }}
      >
        {selectedItem && <Box>{itemContent[selectedItem]}</Box>}
      </Box>
    </Box>
  );
}
