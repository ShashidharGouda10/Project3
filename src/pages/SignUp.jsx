import { Box, Button, TextField, Typography } from "@mui/material";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import bgimage from '../assets/Background.png'
import Navbar from "../components/Navbar";
const SignUp = () => {
  return (
    <>
      <Box sx={{position:'relative'}}>
      <Box
        sx={{
          position:"relative",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor:'transparent',
          boxShadow:'none'
 
        }}
      >
       <Navbar/>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center",flexDirection:'column', alignItems:'center' }}>
        <Box
          sx={{
            m:10,
            flexDirection: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign:'center',
            width:'410px',
            zIndex:1,
            color:'#FFFFFF'
          }}
        >
          <Typography sx={{fontSize:'30px',fontWeight:'bold'}}>Welcome!</Typography>
          <Typography>
            Use these awesome forms to login or create new account in your
            project for free.
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius:'10px',
            width: "300px",
            border:'1px solid #E2E8F0',
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            p: 5,
            boxshadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
            zIndex:1
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#2D3748", fontWeight: "bold", mb: 1 }}>
              Register with
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
              <FacebookIcon sx={{ color: "#2D3748" }} />
              <AppleIcon sx={{ color: "#2D3748" }} />
              <GoogleIcon sx={{ color: "#2D3748" }} />
            </Box>
            <Typography sx={{ color: "#2D3748" }}>or</Typography>
          </Box>
          <Typography sx={{ color: "#2D3748", fontSize: "14px", mb: 0.5 }}>
            Name
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Your Name"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
              },
            }}
          />
          <Typography sx={{ color: "#2D3748", fontSize: "14px", mb: 0.5 }}>
            Email
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Your email address"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
              },
            }}
          />

          <Typography
            sx={{ color: "#2D3748", fontSize: "14px", mt: 1, mb: 0.5 }}
          >
            Password
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            placeholder="Your password"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
              },
            }}
          />
          <Box sx={{ display: "flex", mt: 1 }}>
            <ToggleOnIcon sx={{ color: "#4FD1C5" }} />
            <Typography sx={{ color: "#2D3748", fontSize: "14px" }}>
              Remember me
            </Typography>
          </Box>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#44D1C0",
              color: "#FFFFFF",
              fontWeight: "bold",
              borderRadius: "15px",
              mt: 1,
              "&:hover": {
                backgroundColor: "#3CB5A8",
              },
            }}
          >
            SIGN UP
          </Button>
          <Typography
            sx={{
              textAlign: "center",
              color: "#B0BEC5",
              fontSize: "14px",
              mt: 2,
            }}
          >
            Don’t have an account?{" "}
            <Typography
              component="span"
              sx={{ color: "#4FD1C5", fontWeight: "bold", cursor: "pointer" }}
            >
              Sign up
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box sx={{position:'absolute',top:'0'}}>
            <img src={bgimage} style={{width:'100%',height:'500px',borderRadius:'30px'}} alt="" />
          </Box>
      </Box>
    </>
  );
};

export default SignUp;
