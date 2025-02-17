import {
  Avatar,
  Box,
  Chip,
  CssBaseline,
  IconButton,
  LinearProgress,
  Paper,
  Table,    
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { icons } from "../assets/assets";
import CheckCircle from '@mui/icons-material/CheckCircleOutline';
import { avatars } from "../assets/assets";

const drawerWidth = 240;
const appbarHeight = 80;

const data = [
  {
    id: 1,
    name: "Esthera Jackson",
    email: "esthera@simmmple.com",
    role: "Manager",
    department: "Organization",
    status: "Online",
    avatar: avatars.avatar4,
    date: "14/08/21",
  },
  {
    id: 2,
    name: "Alexa Liras",
    email: "alexa@simmmple.com",
    role: "Programmer",
    department: "Developer",
    status: "Offline",
    avatar: avatars.avatar1,
    date: "14/08/21",
  },
  {
    id: 3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    role: "Executive",
    department: "Projects",
    status: "Online",
    avatar: avatars.avatar3,
    date: "14/08/21",
  },
  {
    id: 4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    role: "Manager",
    department: "Organization",
    status: "Online",
    avatar: avatars.avatar2,
    date: "14/08/21",
  },
  {
    id: 5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    role: "Programmer",
    department: "Developer",
    status: "Offline",
    avatar: avatars.avatar5,
    date: "14/08/21",
  },
  {
    id: 6,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    role: "Designer",
    department: "UI/UX Design",
    status: "Offline",
    avatar: avatars.avatar8,
    date: "14/08/21",
  },
];

const projects = [
  {
    id: 1,
    name: "Chakra Soft UI Version",
    budget: "$14,000",
    status: "Working",
    completion: 60,
    icon: icons.adobeicon,
  },
  {
    id: 2,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    completion: 10,
    icon: icons.icon2,
  },
  {
    id: 3,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    completion: 100,
    icon: icons.icon3,
  },
  {
    id: 4,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    completion: 100,
    icon: icons.spotifyicon,
  },
  {
    id: 5,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    completion: 25,
    icon: icons.icon5,
  },
];

const Tables = () => {
  return (
    <>
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
        <Paper sx={{m:2 }}>
          <Box sx={{p:3}}>
          <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Authors Table</Typography>
          </Box>
          <Box>
            <TableContainer 
              sx={{ maxWidth: '100%' , margin: "auto", mt: 5 }}
            >
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{color:'#A0AEC0',fontSize:'12px'}}>
                      <b>AUTHOR</b>
                    </TableCell>
                    <TableCell sx={{color:'#A0AEC0',fontSize:'12px'}}>
                      <b>FUNCTION</b>
                    </TableCell>
                    <TableCell sx={{color:'#A0AEC0',fontSize:'12px'}}>
                      <b>STATUS</b>
                    </TableCell>
                    <TableCell sx={{color:'#A0AEC0',fontSize:'12px'}}> 
                      <b>EMPLOYED</b>
                    </TableCell>
                    <TableCell sx={{color:'#A0AEC0',fontSize:'12px'}}>
                      <b>ACTION</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((employee) => (
                    <TableRow key={employee.id}>
                     
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <Avatar src={employee.avatar} alt={employee.name} />
                          <div>
                            <Typography sx={{fontSize:'13px'}} fontWeight="bold" color="#2D3748">
                              {employee.name}
                            </Typography>
                            <Typography sx={{fontSize:'11px'}} color="#718096">
                              {employee.email}
                            </Typography>
                          </div>
                        </div>
                      </TableCell>

                     
                      <TableCell>
                        <Typography sx={{fontSize:'13px'}} fontWeight="bold" color="#2D3748">
                          {employee.role}
                        </Typography>
                        <Typography sx={{fontSize:'11px'}}color="#718096">
                          {employee.department}
                        </Typography>
                      </TableCell>

                      
                      <TableCell>
                        <Chip
                           sx={{borderRadius:'10px', color:'#FFFFFF',fontWeight:'bold'}}
                          label={employee.status}
                          color={
                            employee.status === "Online" ? "success" : "default"
                          }
                          variant='filled'
                        />
                      </TableCell>

                      
                      <TableCell>
                        <Typography variant="body2" color="#718096">
                          {employee.date}
                        </Typography>
                      </TableCell>

                      
                      <TableCell>
                       <Typography sx={{color:"#718096" ,fontWeight:'bold',fontSize:'12px'}}>Edit</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>
        <Paper sx={{m:2}}>
          <Box sx={{p:3}}>
            <Typography sx={{fontSize:'18px', fontWeight:'bold'}}>Projects</Typography>
            <Typography sx={{alignItems:'center', display:'flex', color:'#A0AEC0'}}><CheckCircle color="success" /> <span style={{fontWeight:"bold"}}> 30 done</span>  this month</Typography>
          </Box>
          <Box>
            <TableContainer
              sx={{ maxWidth: 1000, margin: "auto", mt: 5 }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{color:'#A0AEC0' ,}}>
                    <TableCell sx={{color:'#A0AEC0',fontSize:'12px'}}>
                      <b>COMPANIES</b>
                    </TableCell >
                    <TableCell sx={{color:'#A0AEC0' ,fontSize:'12px'}}>
                      <b>BUDGET</b>
                    </TableCell>
                    <TableCell sx={{color:'#A0AEC0' ,fontSize:'12px'}}>
                      <b>STATUS</b>
                    </TableCell>
                    <TableCell sx={{color:'#A0AEC0',fontSize:'12px'}}>
                      <b>COMPLETION</b>
                    </TableCell>
                    <TableCell sx={{color:'#A0AEC0',fontSize:'12px'}}>
                      <b>ACTION</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <Avatar src={project.icon} alt={project.name} />
                          <Typography sx={{fontSize:'13px'}} fontWeight="bold" color='#2D3748'>
                            {project.name}
                          </Typography>
                        </div>
                      </TableCell>

                      <TableCell>
                        <Typography sx={{fontSize:'13px'}} fontWeight="bold" color='#2D3748'>
                          {project.budget}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography
                          
                          sx={{
                            color:'#2D3748',
                            fontWeight: "bold",
                            fontSize:'13px'
                          }}
                        >
                          {project.status}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography variant="body2" fontWeight="bold" color="#4FD1C5">
                          {project.completion}%
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={project.completion}
                          sx={{
                            width: "100px",
                            borderRadius: "10px",
                            backgroundColor: "#E2E8F0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#4FD1C5",
                              borderRadius: "10px",
                            },
                          }}
                        />
                      </TableCell>

                      <TableCell>
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Tables;
