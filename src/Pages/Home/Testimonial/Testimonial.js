import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import img1 from '../../../images/people-1.png';
import img2 from '../../../images/people-2.png';
import img3 from '../../../images/people-3.png';


const Testimonial = () => {
    return (
        <Box style={{ marginLeft: "25px" }}>
            <Box style={{ textAlign: "left" }}>
                <h2 style={{ color: 'rgba(4, 250, 250 )' }}>TESTIMONIAL</h2>
                <h1>What's Our Patients <br /> Says</h1>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 4,
                        width: 300,
                        height: 270,
                    },
                }}
            >

                <Paper elevation={3} style={{ padding: "18px" }} >
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that  it has a more-or-less normal distribution of letters/as opposed to using 'Content here, content</p>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box>
                            <img style={{ width: '65px', marginRight: '30px' }} src={img1} alt="" />
                        </Box>
                        <Box style={{ textAlign: 'left' }}>
                            <h4 style={{ color: 'rgba(4, 250, 250)' }}>Winson Herry</h4>
                            <p>California</p>
                        </Box>
                    </Box>
                </Paper>
                <Paper elevation={3} style={{ padding: "18px" }}>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that  it has a more-or-less normal distribution of letters/as opposed to using 'Content here, content</p>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box>
                            <img style={{ width: '65px', marginRight: '30px' }} src={img2} alt="" />
                        </Box>
                        <Box style={{ textAlign: 'left' }}>
                            <h4 style={{ color: 'rgba(4, 250, 250)' }}>Winson Herry</h4>
                            <p>California</p>
                        </Box>
                    </Box>
                </Paper>
                <Paper elevation={3} style={{ padding: "18px" }}>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that  it has a more-or-less normal distribution of letters/as opposed to using 'Content here, content</p>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box>
                            <img style={{ width: '65px', marginRight: '30px' }} src={img3} alt="" />
                        </Box>
                        <Box style={{ textAlign: 'left' }}>
                            <h4 style={{ color: 'rgba(4, 250, 250)' }}>Winson Herry</h4>
                            <p>California</p>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default Testimonial;