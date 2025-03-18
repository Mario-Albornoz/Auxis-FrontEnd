import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", backgroundColor: "#2d2d34", p:"2rem"}}>
      

      {/* Text box under Navbar */}
      <Box
            sx={{
              left: "50%",
              //backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "10px",
              width: { xs: "90%", md: "100%" }, // Responsive width
              textAlign: "center",
            }}
        >
            <Typography variant="h1" fontWeight="bold" color="#0ebfa0" gutterBottom >
            Welcome to Auxis Financial Analyst!
            </Typography>
            <Typography  variant= "h2" color="white">
            Helping medium-sized businesses transform electronic billing data into actionable insights.
            </Typography>
        </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          gap: "2rem",
          position: "relative",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "45%" },
            borderRadius: "10px",
            
          }}
        >
          <Box
            component="img"
            src="/assets/download.jpg"
            sx={{
              width: "100%",
              borderRadius: "10px",
            }}
          />

          {/* Text Content (Overlay) */}
          <Box
            sx={{
              position: "absolute",
              top: "85%",
              left: "92%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: 3,
              width: "80%",
              maxWidth: "80%",
              minWidth: "400px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="#8884d8" gutterBottom>
              Financial Analyst: faster, better, digital
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
              Full financial analytics management system that connect and prosess your electronic billing systems into relevant charts and statistics to help in future decision-making. 
              Integrating AI capabilities like linear regression to make projections based on previous data and other parameters.
            </Typography>

            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0ebfa0",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  "&:hover": { backgroundColor: "#0b8f78"},
                }}
              >
                Your Dashboard
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
