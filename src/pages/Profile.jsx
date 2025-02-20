import {
  Avatar,
  Box,
  Button,
  Card,
  CssBaseline,
  Grid2,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import GroupsIcon from "@mui/icons-material/Groups";
import BuildIcon from "@mui/icons-material/Build";
import { avatars } from "../assets/assets";
import background from "../assets/Background.png";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import bg1 from "../assets/bg1.png";
import AddIcon from '@mui/icons-material/Add';
import bg3 from "../assets/bg3.png";
import avatarsimage from '../assets/Avatars.png'
const drawerWidth = 240;
const appbarHeight = 80;

const Profile = () => {
  return (
    <Box>
      <CssBaseline />
      <Appbar />
      <Sidebar />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          height: `calc(100% - ${appbarHeight}px)`,
          mt: `${appbarHeight}px`,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 950,
            mx: "auto",
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", 
            borderRadius: 3,
            background: "linear-gradient(to right, #FFFFFFD1, #FFFFFFCC)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
           zIndex:1,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              width: "100%",
              height: "140px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={{ position: "relative" }}>
              <Avatar
                src={avatars.avatar4}
                alt="Esthera Jackson"
                sx={{ width: 60, height: 60 }}
              />
              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "#fff",
                  boxShadow: 1,
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <EditIcon fontSize="small" sx={{ color: "#4a4a4a" }} />
              </IconButton>
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#2D3748" }}
              >
                Esthera Jackson
              </Typography>
              <Typography variant="body2" sx={{ color: "#718096" }}>
                esthera@simmmple.com
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="contained"
              startIcon={<LanguageIcon />}
              sx={{
                backgroundColor: "#fff",
                color: "#2D3748",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              Overview
            </Button>
            <Button
              startIcon={<GroupsIcon />}
              sx={{
                color: "#2D3748",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Teams
            </Button>
            <Button
              startIcon={<BuildIcon />}
              sx={{
                color: "#2D3748",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Projects
            </Button>
          </Stack>
        </Box>
        <Grid2 container spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: 2,
              width: "100%",
              gap: "10px",
            }}
          >
            <Paper sx={{ width: "35%" }}>
              <Box sx={{ p: 2 }}>
                <Typography sx={{ color: "#2D3748", fontWeight: "bold" }}>
                  Platform Settings
                </Typography>
              </Box>
              <Box sx={{ gap: "10px", m: 2 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#A0AEC0",
                    fontSize: "10px",
                  }}
                >
                  ACCOUNT
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#A0AEC0",
                    fontSize: "14px",
                    pt: 2,
                  }}
                >
                  {" "}
                  <ToggleOffIcon sx={{ color: "#4FD1C5" }} />
                  Email me when someone answers{" "}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#A0AEC0",
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  <ToggleOnIcon sx={{ color: "#E2E8F0" }} /> Email me when
                  someone follows me
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#A0AEC0",
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  <ToggleOnIcon sx={{ color: "#4FD1C5" }} /> Email me when
                  someone mentions me
                </Typography>
              </Box>
              <Box sx={{ m: 2 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#A0AEC0",
                    fontSize: "10px",
                  }}
                >
                  APPLICATION
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#A0AEC0",
                    fontSize: "14px",
                    pt: 2,
                  }}
                >
                  <ToggleOnIcon sx={{ color: "#4FD1C5" }} /> New launches and
                  projects
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#A0AEC0",
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  {" "}
                  <ToggleOffIcon sx={{ color: "#E2E8F0" }} />
                  Monthly product updates
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#A0AEC0",
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  <ToggleOnIcon sx={{ color: "#4FD1C5" }} /> Subscribe to
                  newsletter
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{ width: "35%" }}>
              <Box sx={{ p: 2 }}>
                <Typography sx={{ color: "#2D3748", fontWeight: "bold" }}>
                  Profile Information
                </Typography>
                <Typography
                  sx={{
                    width: "auto",
                    color: "#A0AEC0",
                    fontSize: "12px",
                    pt: 2,
                  }}
                >
                  Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </Typography>
              </Box>
              <Box sx={{ p: 3 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#718096",
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  Full Name:
                  <span style={{ color: "#A0AEC0", fontSize: "12px" }}>
                    {" "}
                    Alec M. Thompson
                  </span>
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#718096",
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  Mobile:{" "}
                  <span style={{ color: "#A0AEC0", fontSize: "12px" }}>
                    {" "}
                    (44) 123 1234 123
                  </span>
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#718096",
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  Email:{" "}
                  <span style={{ color: "#A0AEC0", fontSize: "12px" }}>
                    {" "}
                    alecthompson@mail.com
                  </span>
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#718096",
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  Location:{" "}
                  <span style={{ color: "#A0AEC0", fontSize: "12px" }}>
                    {" "}
                    United States
                  </span>{" "}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "#718096",
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  Social Media:
                  <span style={{ color: "#4FD1C5" }}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                  </span>
                </Typography>
              </Box>
              <Box></Box>
            </Paper>
            <Paper sx={{ width: "35%" }}>
              <Box sx={{ p: 3 }}>
                <Typography sx={{ color: "#2D3748", fontWeight: "bold" }}>
                  Conversations
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <img src={avatars.avatar4} alt="" style={{ width: "60px",borderRadius:'5px' }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography>Esthera Jackson</Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                    Hi! I need more informations...
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#4FD1C5",
                    pr: 1,
                  }}
                >
                  REPLY
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <img src={avatars.avatar8} alt="" style={{ width: "60px",borderRadius:'5px' }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography>Esthera Jackson</Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                    Hi! I need more informations...
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#4FD1C5",
                    pr: 1,
                  }}
                >
                  REPLY
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <img src={avatars.avatar6} alt="" style={{ width: "60px",borderRadius:'5px' }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography>Esthera Jackson</Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                    Hi! I need more informations...
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#4FD1C5",
                    pr: 1,
                  }}
                >
                  REPLY
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <img src={avatars.avatar7} alt="" style={{ width: "60px",borderRadius:'5px' }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography>Esthera Jackson</Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                    Hi! I need more informations...
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#4FD1C5",
                    pr: 1,
                  }}
                >
                  REPLY
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid2>
        <Box sx={{ m: 2 }}>
          <Paper>
            <Box sx={{p:2}}>
              <Typography sx={{ color: "#2D3748", fontWeight: "bold" }}>
                Projects
              </Typography>
              <Typography sx={{ color: "#A0AEC0", fontSize: "14px" }}>
                Architects design houses
              </Typography>
            </Box>
            <Box sx={{display:'flex',}}>
              <Card sx={{ width: "30%" ,m:2 }}>
              <Box sx={{width:'280px',m:1,borderRadius:'10px',
                  backgroundImage: `linear-gradient(to bottom,#151928E0 ,#31386029 ), url(${bg1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px"
                 }}>

                </Box>
                <Box sx={{p:2}}>
                  <Typography sx={{color:'#A0AEC0', fontSize:'14px', fontWeight:'bold'}}>Project #1</Typography>
                  <Typography sx={{color:'#2D3748',fontWeight:'bold'}}>Modern</Typography>
                  <Typography sx={{ fontSize: "12px", width: "300px",color:'#A0AEC0', pt:1 }}>
                    As Uber works through a huge amount of internal management
                    turmoil.
                  </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center', p:2}}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius:'10px',
                      borderColor: "#4FD1C5",
                      color: "#4FD1C5",
                      fontSize:'12px',
                      fontWeight:'bold'
                    }}
                  >
                    VIEW ALL
                  </Button>
                  <img src={avatarsimage} alt="" />
                </Box>
              </Card>
              <Card sx={{ width: "30%" ,m:2 }}>
                <Box sx={{width:'280px',m:1,borderRadius:'10px',
                  backgroundImage: `linear-gradient(to bottom,#151928E0 ,#31386029 ), url(${bg3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px"
                 }}>

                </Box>
                
                <Box sx={{p:2}}>
                  <Typography sx={{color:'#A0AEC0', fontSize:'14px', fontWeight:'bold'}}>Project #2</Typography>
                  <Typography sx={{color:'#2D3748',fontWeight:'bold'}}>Scandinavian</Typography>
                  <Typography sx={{ fontSize: "12px", width: "300px",color:'#A0AEC0', pt:1,  }}>
                  Music is something that every person has his or her own specific opinion about.
                  </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center', p:2}}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius:'10px',
                      borderColor: "#4FD1C5",
                      color: "#4FD1C5",
                      fontSize:'12px',
                      fontWeight:'bold'
                    }}
                  >
                    VIEW ALL
                  </Button>
                  <img src={avatarsimage}  alt="" />
                </Box>
              </Card>
              <Card sx={{ width: "30%" ,m:2,alignContent:'center' }}>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <AddIcon/>
                  <Typography sx={{color:'#718096',fontWeight:'bold'}}>Create a new Project</Typography>
                </Box>
              </Card>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box sx={{position:'absolute', top:'0', 
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            p:1
          }}>
      <img src={background} style={{ width:'1000px'}} alt="" />
      </Box>
    </Box>
  );
};

export default Profile;
