import { Box, Button, TextField, Typography } from "@mui/material";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import Navbar from "../components/Navbar";
import chakraimage from "../assets/chakraimage.png";

const SignIn = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              m: 15,
              width: "300px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              p: 10,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#4FD1C5", fontWeight: "bold", mb: 1 }}
            >
              Welcome Back
            </Typography>

            <Typography
              sx={{
                color: "#A0AEC0",
                fontSize: "14px",
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Enter your email and password to sign in
            </Typography>

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
              color="#4FD1C5"
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
              SIGN IN
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
          <Box sx={{ position: "absolute", top: "-25px", right: "-50px" }}>
            <img
              src={chakraimage}
              style={{ width: "600px", height: "700px", borderRadius: "30px" }}
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
