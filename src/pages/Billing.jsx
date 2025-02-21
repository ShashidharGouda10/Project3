import {
  Box,
  CssBaseline,
  Grid2,
  Paper,
  Typography,
  Card,
  IconButton,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import creditcard from "../assets/CreditCard.png";
import WalletIcon from "@mui/icons-material/Wallet";
import EditIcon from "@mui/icons-material/Edit";
import visaicon from "../assets/Visaicon.svg";
import mastercardicon from "../assets/Mastercardicon.svg";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";
const drawerWidth = 240;
const appbarHeight = 80;
const paymentMethods = [
  {
    id: 1,
    type: "MasterCard",
    number: "7812 2139 0823 XXXX",
    logo: mastercardicon,
    color: "#ff5f00",
  },
  {
    id: 2,
    type: "Visa",
    number: "7812 2139 0823 XXXX",
    logo: visaicon,
    color: "#1a1f71",
  },
];
const invoices = [
  { date: "March, 01, 2020", id: "SMS-415848", amount: "$180" },
  { date: "February, 10, 2021", id: "JRV-126749", amount: "$250" },
  { date: "April, 05, 2020", id: "FB-212582", amount: "$560" },
  { date: "June, 25, 2019", id: "JQW-105878", amount: "$120" },
  { date: "March, 01, 2019", id: "BAR-803481", amount: "$300" },
];
const transactions = [
  {
    label: "NEWEST",
    data: [
      {
        name: "Netflix",
        date: "27 March 2023, at 12:30 PM",
        amount: "-$2500",
        type: "down",
      },
      {
        name: "Apple",
        date: "27 March 2023, at 12:30 PM",
        amount: "+$2500",
        type: "up",
      },
    ],
  },
  {
    label: "YESTERDAY",
    data: [
      {
        name: "Stripe",
        date: "26 March 2023, at 13:45 PM",
        amount: "+$8000",
        type: "up",
      },
      {
        name: "HubSpot",
        date: "26 March 2023, at 12:30 PM",
        amount: "+$1700",
        type: "up",
      },
      {
        name: "Webflow",
        date: "26 March 2023, at 05:00 AM",
        amount: "Pending",
        type: "pending",
      },
      {
        name: "Microsoft",
        date: "25 March 2023, at 18:30 PM",
        amount: "-$987",
        type: "down",
      },
    ],
  },
];

const Billing = () => {
  return (
    <Box sx={{bgcolor:'#F8F9FA'}} >
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
        <Grid2 container spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 2,
              gap: "30px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <img src={creditcard} alt="" width={"60%"} />
                <Paper sx={{ width: "30%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
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
                        m: 3,
                      }}
                    >
                      <WalletIcon sx={{ color: "#FFFFFF" }} />
                    </Box>
                    <Typography sx={{ color: "#2D3748", fontWeight: "bold" }}>
                      Salary
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A0AEC0",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Belong Interactive
                    </Typography>
                    <hr style={{ width: "90px", color: "#A0AEC0" }} />
                    <Typography
                      sx={{
                        color: "#2D3748",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      +$2000
                    </Typography>
                  </Box>
                </Paper>
                <Paper sx={{ width: "30%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
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
                        m: 3,
                      }}
                    >
                      <WalletIcon sx={{ color: "#FFFFFF" }} />
                    </Box>
                    <Typography sx={{ color: "#2D3748", fontWeight: "bold" }}>
                      Paypal
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A0AEC0",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Freelance Payment
                    </Typography>
                    <hr style={{ width: "90px", color: "#A0AEC0" }} />
                    <Typography
                      sx={{
                        color: "#2D3748",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      $455.00
                    </Typography>
                  </Box>
                </Paper>
              </Box>
              <Paper sx={{ mt: 2 }}>
                <Box
                  sx={{
                    maxWidth: 800,
                    mx: "auto",

                    p: 3,
                    borderRadius: 3,
                    bgcolor: "##FFFFFF",
                    boxShadow: 2,
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Typography variant="body1" fontWeight="bold">
                      Payment Method
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#2e2e46",
                        color: "white",
                        borderRadius: 3,
                        fontSize: "12px",
                      }}
                    >
                      ADD A NEW CARD
                    </Button>
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                    {paymentMethods.map((card) => (
                      <Card
                        key={card.id}
                        variant="outlined"
                        sx={{
                          width:'50%',
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          p: 2,
                          borderRadius: 3,
                          borderColor: "#e0e0e0",
                          boxShadow: "none",
                        }}
                      >
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <img
                            src={card.logo}
                            alt={card.type}
                            style={{ width: 20, height: 20 }}
                          />

                          <Typography
                            sx={{ fontSize: "12px" }}
                            color="text.secondary"
                          >
                            {card.number}
                          </Typography>
                        </Stack>

                        <IconButton>
                          <EditIcon sx={{ width: "20px" }} />
                        </IconButton>
                      </Card>
                    ))}
                  </Stack>
                </Box>
              </Paper>
            </Box>
            <Paper>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 3,
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Invoices</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: "12px",
                    border: "1px solid #4FD1C5",
                    color: "#4FD1C5",
                    fontWeight:'bold'
                  }}
                >
                  View All
                </Button>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  mx: "auto",
                  p: 2,
                  backgroundColor: "#fff",
                }}
              >
                {invoices.map((invoice, index) => (
                  <Box key={index}>
                    <Stack
                  
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box >
                        <Typography
                          fontWeight="bold"
                          sx={{ color: "#4a4a4a", fontSize: "14px" }}
                        >
                          {invoice.date}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#A0AEC0",
                            fontSize: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          #{invoice.id}
                        </Typography>
                      </Box>

                      <Stack direction="row" alignItems="center" >
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          sx={{ color: "#4a4a4a", pl: 9, fontSize: "14px" }}
                        >
                          {invoice.amount}
                        </Typography>
                        <IconButton size="small">
                          <DescriptionIcon sx={{ color: "#2D3748" }} />{" "}
                          <span
                            style={{ fontSize: "10px", fontWeight: "bold" }}
                          >
                            PDF
                          </span>
                        </IconButton>
                      </Stack>
                    </Stack>
                    {index < invoices.length - 1 && <Divider sx={{ mt: 2 }} />}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        </Grid2>
        <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
          <Paper sx={{ width: "60%" }}>
            <Box>
              <Typography sx={{ color: "#2D3748", fontWeight: "bold", p: 3 }}>
                Billing Information
              </Typography>
              <Box>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                    m: 3,
                    bgcolor: "#F8F9FA",
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: "bold", color: "#718096" }}>
                      Oliver Liam
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                      Company Name:{" "}
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#A0AEC0",
                        }}
                      >
                        Viking Burito
                      </span>
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                      Email adress:{" "}
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#A0AEC0",
                        }}
                      >
                        oliver@buritto.com
                      </span>
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                      VAT Number:
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#A0AEC0",
                        }}
                      >
                        FRB1234567
                      </span>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      p: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        fontSize: "12px",
                        color: "#E53E3E",
                      }}
                    >
                      <DeleteIcon sx={{ width: "15px" }} />
                      DELETE
                    </Typography>
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        fontSize: "12px",
                      }}
                    >
                      <EditIcon sx={{ width: "15px", }} />
                      EDIT
                    </Typography>
                  </Box>
                </Paper>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                    m: 3,
                    bgcolor: "#F8F9FA",
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: "bold", color: "#718096" }}>
                      Oliver Liam
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                      Company Name:{" "}
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#A0AEC0",
                        }}
                      >
                        Viking Burito
                      </span>
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                      Email adress:{" "}
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#A0AEC0",
                        }}
                      >
                        oliver@buritto.com
                      </span>
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                      VAT Number:
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#A0AEC0",
                        }}
                      >
                        FRB1234567
                      </span>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      p: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        fontSize: "12px",
                        color: "#E53E3E",
                      }}
                    >
                      <DeleteIcon sx={{ width: "15px" }} />
                      DELETE
                    </Typography>
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        fontSize: "12px",
                      }}
                    >
                      <EditIcon sx={{ width: "15px" }} />
                      EDIT
                    </Typography>
                  </Box>
                </Paper>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                    m: 3,
                    bgcolor: "#F8F9FA",
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: "bold", color: "#718096" }}>
                      Oliver Liam
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                      Company Name:{" "}
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#A0AEC0",
                        }}
                      >
                        Viking Burito
                      </span>
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                      Email adress:{" "}
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#A0AEC0",
                        }}
                      >
                        oliver@buritto.com
                      </span>
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#A0AEC0" }}>
                      VAT Number:
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#A0AEC0",
                        }}
                      >
                        FRB1234567
                      </span>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      p: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        fontSize: "12px",
                        color: "#E53E3E",
                      }}
                    >
                      <DeleteIcon sx={{ width: "15px" }} />
                      DELETE
                    </Typography>
                    <Typography
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        fontSize: "12px",
                      }}
                    >
                      <EditIcon sx={{ width: "15px" }} />
                      EDIT
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ width: "38%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#2D3748" }}>
                Your Transactions
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#A0AEC0",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "13px",
                }}
              >
                <CalendarIcon sx={{ color: "#2D3748" }} /> 23 - 30 March 2020{" "}
              </Typography>
            </Box>
            <Box
              sx={{ maxWidth: 400, mx: "auto", p: 2, backgroundColor: "#fff" }}
            >
              {transactions.map((section, index) => (
                <Box key={index} sx={{ mb: 1 }}>
                  <Typography
                    fontWeight="bold"
                    sx={{ color: "#A0AEC0", mb: 3,mt:2,fontSize:'12px' }}
                  >
                    {section.label}
                  </Typography>

                  {section.data.map((item, idx) => (
                    <Stack
                      key={idx}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mb: 1 }}
                    >
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton size="small">
                          {item.type === "up" ? (
                            <ArrowCircleUpIcon sx={{ color: "#48BB78" }} />
                          ) : item.type === "down" ? (
                            <ArrowCircleDownIcon sx={{ color: "#E53E3E" }} />
                          ) : (
                            <ErrorOutlineIcon sx={{ color: "#A0AEC0" }} />
                          )}
                        </IconButton>
                        <Box>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            sx={{ color: "#2D3748",fontSize:'14px'}}
                          >
                            {item.name}
                          </Typography>
                          <Typography  sx={{ color: '#A0AEC0' ,fontSize:'12px'}}>
                            {item.date}
                          </Typography>
                        </Box>
                      </Stack>

                      <Typography
                        
                        fontWeight="bold"
                        sx={{
                          fontSize:'14px',
                          color:
                            item.type === "up"
                              ? "#48BB78"
                              : item.type === "down"
                              ? "#E53E3E"
                              : "#A0AEC0",
                        }}
                      >
                        {item.amount}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Billing;
