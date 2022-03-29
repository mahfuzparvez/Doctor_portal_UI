import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
    marginBottom: 50
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ color: 'white' }}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-115px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box sx={{ width: '75%' }}>
                        <Typography variant='h6' sx={{ mb: 3 }} style={{ color: 'rgba(4, 250, 250)' }}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant='h4' sx={{ mb: 2 }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='p'>
                            It is a long establish fact that a reader will be distractedby thereadable content of a page when looking at its
                        </Typography>
                        <br />
                        <Button variant="contained" sx={{ mt: 2 }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;