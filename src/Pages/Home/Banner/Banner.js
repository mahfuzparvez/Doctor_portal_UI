import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';


const Bannerbg = {
    background: `url(${bg})`,
};
const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}
const topSmallCard = {
    display: 'flex',
    height: 150,
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'rgba(4, 250, 250)'
}

const Banner = () => {
    return (
        <Container style={Bannerbg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 14, fontWeight: 300, color: 'grey' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde at vitae perspiciatis quam nostrum porro placeat neque molestias accusamus iure.
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '500px' }} src={chair} alt="" />
                </Grid>
            </Grid>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 300, ...topSmallCard, px: 3 }} >
                    <AccessTimeIcon style={{ fontSize: '50px' }} />
                    <CardContent style={{ textAlign: 'left', }}>
                        <Typography gutterBottom variant="h6" component="div">
                            Opening Hours
                        </Typography>
                        <Typography variant="body2">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 300, ...topSmallCard, px: 3, mx: 4, backgroundColor: 'rgba(31, 35, 35)' }} >
                    <LocationOnIcon style={{ fontSize: '50px' }} />
                    <CardContent style={{ textAlign: 'left', }}>
                        <Typography gutterBottom variant="h6" component="div">
                            Visit Our location
                        </Typography>
                        <Typography variant="body2">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 300, ...topSmallCard, px: 3 }} >
                    <WifiCalling3Icon style={{ fontSize: '50px' }} />
                    <CardContent style={{ textAlign: 'left', }}>
                        <Typography gutterBottom variant="h6" component="div">
                            Contact us now
                        </Typography>
                        <Typography variant="body2">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container >
    );
};

export default Banner;