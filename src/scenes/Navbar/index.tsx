import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme  } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

type Props = {}

const Navbar = (props: Props) => {
    const {palette}= useTheme();
    const [selected, setSelected] = useState("Dashboard");
    console.log("Palette Grey 300:", palette.grey[300]);

  return( <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
    {/* Left Side*/}
    <FlexBetween gap="0.75rem">
        <BrokenImageIcon sx={{ fontSize: "28px"}}/>
        <Typography variant='h4' fontSize="16px">
            Auxis
        </Typography>
    </FlexBetween>

     {/* Right Side*/}
     <FlexBetween gap="2rem">
        <Box sx={{"&:hover": { color: palette.primary[100]}}} >
            <Link
            to="/"
            onClick={() => setSelected('Dashboard')}
            style={{
                color: selected === "Dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit"
            }}>
                Dashboard
            </Link>
        </Box>
        <Box sx={{"&:hover": { color: palette.primary[100]}}} >
            <Link
            to="/Predictions"
            onClick={() => setSelected('Predictions')}
            style={{
                color: selected === "Predictions" ? "inherit" : palette.grey[700],
                textDecoration: "inherit"
            }}>
                Predictions
            </Link>
        </Box>
        <FlexBetween></FlexBetween>

     </FlexBetween>

  </FlexBetween>

  );
}

export default Navbar