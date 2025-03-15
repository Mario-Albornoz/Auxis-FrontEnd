
import {Typography, Box } from "@mui/material";   

const HomeTopText = () =>{
    return (
        <Box
            sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: 3,
            width: { xs: "90%", md: "40%" }, // Responsive width
            textAlign: "center",
            }}
        >
            <Typography variant="h4" fontWeight="bold" color="#002a46">
            Welcome to Financial Analyst
            </Typography>
            <Typography variant="body1" color="text.secondary">
            Helping medium-sized businesses transform electronic billing data into actionable insights.
            </Typography>
        </Box>
    )
}

export default HomeTopText;