import { Link } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import {Button, Typography} from '@mui/material'

type Props={}

const Home= (props: Props) => {
    return (
        <FlexBetween 
         sx={{
            flexDirection: 'column', // Stack items vertically
            height: '100vh', // Full height of the viewport
            justifyContent: 'center', // Center vertically
            alignItems: 'center' // Center horizontally
        }}>
            

            <FlexBetween gap="0.75rem">
                <Typography variant='h4' fontSize="16px">
                    Auxis
                </Typography>
            </FlexBetween>
            
            <Link to="/dashboard" style={{ textDecoration: 'none', marginTop: '1rem' }}> 
                <Button 
                    variant="contained" 
                    color="primary"
                    sx={{
                        padding: '10px 20px',
                        fontSize: '16px', 
                        borderRadius: '5px', 
                    }}
                     
                >
                    Go to Dashboard
                </Button>
            </Link>

        </FlexBetween>

    );
}

export default Home 