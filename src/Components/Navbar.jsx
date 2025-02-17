import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import logo from '../assets/Shape.svg'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate= useNavigate();
  return (
    <AppBar
      position='static'
      sx={{
        background: "linear-gradient(to right, #FFFFFFD1, #FFFFFFCC)",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        width: "1037px",
        height: "72px",
        display: "flex",
        justifyContent: "center",
        zIndex:1
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
        <Box display="flex" alignItems="center">
          <img
            src={logo} 
            alt="Logo"
            style={{ marginRight: 8 }}
          />
          <Typography  sx={{ color: "#2D3748", fontWeight: "bold",fontSize:'16px' }}>
            PURITY UI DASHBOARD
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={3}>
          <Button
            startIcon={<DashboardIcon />}
            sx={{ color: "#2D3748", textTransform: "none", fontSize: "12px",fontWeight: "bold" }}
           onClick={()=>navigate('/')}
         >
            DASHBOARD
          </Button>
          <Button
            startIcon={<PersonIcon />}
            sx={{ color: "#2D3748", textTransform: "none", fontSize: "12px",fontWeight: "bold" }}
            onClick={()=>navigate('/profile')}
          >
            PROFILE
          </Button>
          <Button
            startIcon={<HowToRegIcon />}
            sx={{ color: "#2A2E3B", textTransform: "none", fontSize: "12px",fontWeight: "bold" }}
            onClick={()=>navigate('/signup')}
          >
            SIGN UP
          </Button>
          <Button
            startIcon={<VpnKeyIcon />}
            sx={{ color: "#2D3748", textTransform: "none", fontSize: "12px",fontWeight: "bold" }}
            onClick={()=>navigate('/signin')}
          >
            SIGN IN
          </Button>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#313860",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "12px",
            padding: "6px 16px",
            "&:hover": {
              backgroundColor: "#151928",
            },
          }}
        >
          Free Download
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
