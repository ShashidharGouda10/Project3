import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WalletIcon from "@mui/icons-material/Wallet";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircle from "@mui/icons-material/CheckCircleOutline";

import {
  Avatar,
  AvatarGroup,
  Grid2,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import chakraImage from "../assets/chakraimage.png";
import bgimage from "../assets/bgimage.png";
import graphimage from "../assets/Graph.png";
import graphimage2 from "../assets/Data.png";
import { icons } from "../assets/assets";
import { avatars } from "../assets/assets";
import Sidebar from "../components/Sidebar";
import Appbar from "../components/Appbar";
const drawerWidth = 240;

const projectData = [
  {
    name: "Chakra Soft UI Version",
    icon: icons.adobeicon,
    members: [
      avatars.avatar4,
      avatars.avatar6,
      avatars.avatar3,
      avatars.avatar8,
    ],
    budget: "$14,000",
    completion: 80,
  },
  {
    name: "Add Progress Track",
    icon: icons.icon2,
    members: [avatars.avatar1, avatars.avatar2],
    budget: "$3,000",
    completion: 10,
  },
  {
    name: "Fix Platform Errors",
    icon: icons.icon3,
    members: [avatars.avatar6, avatars.avatar8],
    budget: "Not set",
    completion: 100,
  },
  {
    name: "Launch our Mobile App",
    icon: icons.spotifyicon,
    members: [
      avatars.avatar4,
      avatars.avatar6,
      avatars.avatar3,
      avatars.avatar8,
    ],
    budget: "$32,000",
    completion: 100,
  },
  {
    name: "Add the New Pricing Page",
    icon: icons.icon5,
    members: [avatars.avatar6, avatars.avatar8],
    budget: "$400",
    completion: 25,
  },
  {
    name: "Redesign New Online Shop",
    icon: icons.icon6,
    members: [
      avatars.avatar1,
      avatars.avatar2,
      avatars.avatar3,
      avatars.avatar4,
    ],
    budget: "$7,600",
    completion: 40,
  },
];
const events = [
  {
    icon: icons.notification,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "#00C897",
  },
  {
    icon: icons.cssicon,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "#D32F2F",
  },
  {
    icon: icons.carticon,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "#1976D2",
  },
  {
    icon: icons.valleticon,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "#FFA000",
  },
  {
    icon: icons.dropimage,
    title: "Unlock package for Development",
    date: "19 DEC 11:35 PM",
    color: "#7B1FA2",
  },
  {
    icon: icons.adobeicon,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
    color: "#D81B60",
  },
];

export default function Dashboard() {
  return (
    <Box
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <CssBaseline />
      <Appbar />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "10px",
            mb: "10px",
          }}
        >
          <Paper>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "200px",
                padding: "10px",
              }}
            >
              <Box>
                <Typography
                  color="#A0AEC0"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "700",
                    lineHeight: "18px",
                  }}
                >
                  Today&apos;s Money
                </Typography>
                <Typography
                  color="#2D3748"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "25.2px",
                  }}
                >
                  $53,000{" "}
                  <span
                    style={{
                      color: "#48BB78",
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "19.6px",
                    }}
                  >
                    +55%
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#4FD1C5",
                  padding: "5px",
                  borderRadius: "12px",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WalletIcon sx={{ color: "#FFFFFF" }} />
              </Box>
            </Box>
          </Paper>
          <Paper>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "200px",
                padding: "10px",
              }}
            >
              <Box>
                <Typography
                  color="#A0AEC0"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "700",
                    lineHeight: "18px",
                  }}
                >
                  Today&apos;s Users
                </Typography>
                <Typography
                  color="#2D3748"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "25.2px",
                  }}
                >
                  2300{" "}
                  <span
                    style={{
                      color: "#48BB78",
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "19.6px",
                    }}
                  >
                    +5%
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#4FD1C5",
                  padding: "5px",
                  borderRadius: "12px",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LanguageIcon sx={{ color: "#FFFFFF" }} />
              </Box>
            </Box>
          </Paper>
          <Paper>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "200px",
                padding: "10px",
              }}
            >
              <Box>
                <Typography
                  color="#A0AEC0"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "700",
                    lineHeight: "18px",
                  }}
                >
                  New Clients
                </Typography>
                <Typography
                  color="#2D3748"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "25.2px",
                  }}
                >
                  +3052{" "}
                  <span
                    style={{
                      color: "#E53E3E",
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "19.6px",
                    }}
                  >
                    -14%
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#4FD1C5",
                  padding: "5px",
                  borderRadius: "12px",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DescriptionIcon sx={{ color: "#FFFFFF" }} />
              </Box>
            </Box>
          </Paper>
          <Paper>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "200px",
                padding: "10px",
              }}
            >
              <Box>
                <Typography
                  color="#A0AEC0"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "700",
                    lineHeight: "18px",
                  }}
                >
                  Totle Sales
                </Typography>
                <Typography
                  color="#2D3748"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "25.2px",
                  }}
                >
                  $1,73,000{" "}
                  <span
                    style={{
                      color: "#48BB78",
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "19.6px",
                    }}
                  >
                    +8%
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#4FD1C5",
                  padding: "5px",
                  borderRadius: "12px",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ShoppingCartIcon sx={{ color: "#FFFFFF" }} />
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex ",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Paper sx={{ width: "48%" }}>
            <Box
              sx={{
                display: "flex ",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "700",
                    lineHeight: "18px",
                    color: "#A0AEC0",
                  }}
                >
                  Built by developers
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "25.2px",
                  }}
                >
                  Purity UI Dashboard
                </Typography>
                <Typography
                  style={{
                    color: "#A0AEC0",
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "19.6px",
                  }}
                >
                  From colors, cards, typography to complex elements,
                  <br />
                  you will find the full documentation.
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: "60px",
                    color: "#2D3748",
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "19.6px",
                  }}
                >
                  Read more <ArrowForwardIcon />
                </Typography>
              </Box>
              <Box>
                <img
                  src={chakraImage}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    height: "150px",
                    width: "160px",
                    marginRight: "20px",
                  }}
                />
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ width: "48%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                m: "8px",
                p: "18px",

                backgroundImage: `linear-gradient(#31386029,#151928E0),url(${bgimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "25.2px",
                  color: "#FFFFFF",
                }}
              >
                Work with the Rockets
              </Typography>
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "19.6px",
                }}
              >
                Wealth creation is an evolutionarily recent positive-sum game.{" "}
                <br />
                It is all about who take the opportunity first.
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "60px",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "19.6px",
                }}
              >
                Read more <ArrowForwardIcon />
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Grid2 container gridRow={2} spacing={2} ml={3}>
        <Paper sx={{ width: "48%", padding: "10px" }}>
          <Box>
            <img src={graphimage} style={{ width: "100%" }} alt="" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", pt: "5px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Active users</Typography>
            <Typography sx={{ color: "#A0AEC0", fontSize: "14px" }}>
              <span style={{ color: "#4FD1C5" }}>(+23)</span> than last week
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: "15px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: "3px", alignItems: "center" }}>
                <Box
                  sx={{
                    bgcolor: "#4FD1C5",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WalletIcon sx={{ color: "#FFFFFF" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#A0AEC0",
                  }}
                >
                  Users
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                32,984
              </Typography>
              <LinearProgress
                sx={{
                  width: "100px",
                  borderRadius: "10px",
                  backgroundColor: "#E2E8F0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#4FD1C5",
                    borderRadius: "10px",
                  },
                }}
                variant="determinate"
                value={80}
              />{" "}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: "3px", alignItems: "center" }}>
                <Box
                  sx={{
                    bgcolor: "#4FD1C5",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WalletIcon sx={{ color: "#FFFFFF" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#A0AEC0",
                  }}
                >
                  Users
                </Typography>
              </Box>

              <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                32,984
              </Typography>
              <LinearProgress
                sx={{
                  width: "100px",
                  borderRadius: "10px",
                  backgroundColor: "#E2E8F0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#4FD1C5",
                    borderRadius: "10px",
                  },
                }}
                variant="determinate"
                value={80}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: "3px", alignItems: "center" }}>
                <Box
                  sx={{
                    bgcolor: "#4FD1C5",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WalletIcon sx={{ color: "#FFFFFF" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#A0AEC0",
                  }}
                >
                  Users
                </Typography>
              </Box>

              <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                32,984
              </Typography>
              <LinearProgress
                sx={{
                  width: "100px",
                  borderRadius: "10px",
                  backgroundColor: "#E2E8F0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#4FD1C5",
                    borderRadius: "10px",
                  },
                }}
                variant="determinate"
                value={80}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: "3px", alignItems: "center" }}>
                <Box
                  sx={{
                    bgcolor: "#4FD1C5",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WalletIcon sx={{ color: "#FFFFFF" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#A0AEC0",
                  }}
                >
                  Users
                </Typography>
              </Box>

              <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                32,984
              </Typography>
              <LinearProgress
                sx={{
                  width: "100px",
                  borderRadius: "10px",
                  backgroundColor: "#E2E8F0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#4FD1C5",
                    borderRadius: "10px",
                  },
                }}
                variant="determinate"
                value={80}
              />
            </Box>
          </Box>
        </Paper>
        <Paper sx={{ width: "48%", p: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Sales overview
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                <span style={{ color: "green", fontWeight: "bold" }}>(+5)</span>{" "}
                more in 2021
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <img src={graphimage2} style={{ width: "100%" }} alt="" />
            </Box>
          </Box>
        </Paper>
      </Grid2>
      <Grid2 container spacing={2} gridRow={2} ml={3} mt={3} mb={2}>
        <Paper
          sx={{
            width: "70%",
            height: "50%",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }}>Projects</Typography>
            <Typography
              sx={{ alignItems: "center", display: "flex", color: "#A0AEC0" }}
            >
              <CheckCircle color="success" />{" "}
              <span style={{ fontWeight: "bold" }}> 30 done</span> this month
            </Typography>
          </Box>
          <Box>
            <TableContainer sx={{ padding: "10px", width: "100%" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: "12px" }}>
                      COMPANIES
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: "12px" }}>
                      MEMBERS
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: "12px" }}>
                      BUDGET
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: "12px" }}>
                      COMPLETION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projectData.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography sx={{ fontSize: "12px" }}>
                          <img
                            src={project.icon}
                            alt={project.name}
                            width={24}
                            height={24}
                            style={{ marginRight: 8, verticalAlign: "middle" }}
                          />
                          {project.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <AvatarGroup max={4} spacing={20}>
                          {project.members.map((avatar, i) => (
                            <Avatar
                              key={i}
                              src={avatar}
                              alt={`Member ${i + 1}`}
                            />
                          ))}
                        </AvatarGroup>
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }}>
                        {project.budget}
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ fontSize: "12px" }}>
                          {project.completion}%
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          sx={{
                            borderRadius: "10px",
                            backgroundColor: "#E2E8F0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#4FD1C5",
                              borderRadius: "10px",
                            },
                          }}
                          value={project.completion}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>
        <Paper
          sx={{
            width: "26%",
            height: "50%",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }}>Orders overview</Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#A0AEC0" }}
            >
              <span style={{ color: "green" }}>+30%</span>this month
            </Typography>
          </Box>
          <Box sx={{}}>
            {events.map((event, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", padding: "15px" }}
              >
                <Box>
                  <img
                    src={event.icon}
                    alt={event.name}
                    width={24}
                    height={24}
                    style={{ marginRight: 8, verticalAlign: "middle" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      padding: "10px",
                      fontSize: "12px",
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      color: "#E2E8F0",
                    }}
                  >
                    {event.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      </Grid2>
    </Box>
  );
}
