import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", backgroundColor: "#002a46", p:"2rem"}}>
      

      {/* Text box under Navbar */}
      <Box
            sx={{
              left: "50%",
              //backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "10px",
              //boxShadow: 3,
              width: { xs: "90%", md: "100%" }, // Responsive width
              textAlign: "center",
            }}
        >
            <Typography variant="h1" fontWeight="bold" color="white" gutterBottom >
            Welcome to Financial Analyst!!
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
            boxShadow: 3,
          }}
        >
          <Box
            component="img"
            src="/assets/analytics_home_img.png"
            alt="Happy couple using laptop"
            sx={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: 3,
            }}
          />

          {/* Text Content (Overlay) */}
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              left: "90%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: 3,
              width: "90%",
              maxWidth: "90%",
              minWidth: "400px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="#002a46" gutterBottom>
              Financial Analyst: faster, better, digital
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
              Full financial analytics management system for medium-sized companies. Connect your electronic billing systems, and we process it and transform it into relevant charts and statistics to help in future decision-making. 
              Integrating AI capabilities like linear regression to make projections based on previous data and other parameters.
            </Typography>

            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#002a46",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  "&:hover": { backgroundColor: "#004b75" },
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
