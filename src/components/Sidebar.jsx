
import  { useState } from "react";
import { Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BuildIcon from "@mui/icons-material/Build";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import logo from "../assets/Shape.svg";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 240;
const MenuItems1 = [
  { text: "Dashboard", icon: <HomeIcon />, path: "/" },
  { text: "Tables", icon: <BarChartIcon />, path: "/tables" },
  { text: "Billing", icon: <CreditCardIcon />, path: "/billing" },
  { text: "RTL", icon: <BuildIcon /> },
];
const MenuItems2 = [
  { text: "Profile", icon: <AccountBoxIcon />, path: "/profile" },
  { text: "Sign In", icon: <InsertDriveFileIcon />, path: "/signin" },
  { text: "Sign Up", icon: <RocketLaunchIcon />, path: "/signup" },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth, bgcolor: "#F8F9FA" }}>
      <Box
        sx={{
          margin: "10px",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logo} style={{ width: "20px" }} alt="logo" />
        <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
          PURITY UI DASHBOARD
        </Typography>
      </Box>
      <List>
        {MenuItems1.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon
                sx={{
                  color: "#4FD1C5",
                  bgcolor: "#FFFFFF",
                  padding: "5px",
                  borderRadius: "12px",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ color: "#A0AEC0", paddingLeft: "5px" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ textAlign: "left", paddingLeft: "25px", color: "#2D3748" }}>
        <Typography sx={{ fontWeight: "600" }}> ACCOUNT PAGES</Typography>
      </Box>
      <List>
        {MenuItems2.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon
                sx={{
                  color: "#4FD1C5",
                  bgcolor: "#FFFFFF",
                  padding: "5px",
                  borderRadius: "12px",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ paddingLeft: "5px", color: "#A0AEC0" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ position: "absolute", top: 20, left: 20, zIndex: 1300 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        sx={{
          width: isMobile ? "auto" : drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
