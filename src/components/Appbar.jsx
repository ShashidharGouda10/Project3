import { AppBar, Box, Breadcrumbs,  IconButton, InputBase, Toolbar, Typography } from "@mui/material";
import { Settings, Notifications, Person } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation,  } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const drawerWidth = 240;

const Appbar = () => {
  const navigate =useNavigate();
  const location = useLocation();
  const getBreadcrumbs = (pathname) => {
    switch (pathname) {
      case "/tables":
        return ["Pages", "Tables"];
      case "/billing":
        return ["Pages", "Billing"];
      case "/profile":
        return ["Pages", "Profile"];
      case "/signin":
        return ["Pages", "Sign Ip"];
      default:
        return ["Pages", "Dashboard"];
    }
  };
  const breadcrumbs = getBreadcrumbs(location.pathname);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          
        }} 
       
      >
        <Toolbar
          sx={{
            bgcolor: "#F8F9FA",
            display: "flex",
            justifyContent: "space-between",
            border: "none",
          }}
        >
          <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "14px", color: "#5C5C5C" }}>
              {breadcrumbs.map((crumb, index) => (
                <Typography color="text.secondary" key={index}>
                  {crumb}
                </Typography>
              ))}
            </Breadcrumbs>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", mt: 1 }}>
              {breadcrumbs[1]}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#E2E8F0",
                borderRadius: "20px",
                padding: "5px 10px",
                width: "200px",
              }}
            >
              <SearchIcon sx={{ color: "#2D3748", fontSize: "20px" }} />
              <InputBase placeholder="Type here..." sx={{ ml: 1, flex: 1, fontSize: "14px" }} />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton onClick={()=>navigate('/profile')}>
                <Person sx={{ color: "#718096" }}  />
              </IconButton>
               <IconButton onClick={()=>navigate('/signin')}>
              <Typography variant="body2" sx={{ color: "#718096", fontSize: "14px",cursor:'pointer' }} >
                Sign In
              </Typography>
              </IconButton>
              <IconButton>
                <Settings sx={{ color: "#718096" }} />
              </IconButton>
              <IconButton>
                <Notifications sx={{ color: "#718096" }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Appbar;
