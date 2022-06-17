import React from 'react';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Box } from '@mui/system';
import { Button } from '@mui/material';


const ExceptionalDental = () => {
    return (
        <Box style={{ padding: "50px" }}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <img style={{ width: "75%", height: "400px", borderRadius: '10px' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={6}>
                    <Box style={{ textAlign: "left", marginTop: "30px" }}>
                        <h1>Exceptional Dental <br /> Care,on Your Terms</h1>
                        <p>It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point of using Lorem<br /> Ipsumis that  it has a more-or-less normal distribution of letters/as<br /> opposed to using 'Content here, content here', <br /> making it look like readable English. Many desktop publishing <br /> packages and web page </p>
                        <Button sx={{ marginTop: 3 }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExceptionalDental;