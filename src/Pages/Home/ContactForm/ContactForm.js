import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const ContactForm = () => {
    const inputValueClean = e => {
        const inputs = document.querySelectorAll('#filled-basic, #last_name');
        inputs.forEach(input => {
            input.value = '';
        });
    }
    const handlContactMessageSubmit = e => {
        alert('success');
        inputValueClean();
        e.preventDefault();
    }
    return (
        <form onSubmit={handlContactMessageSubmit} style={{ backgroundColor: 'rgba(52, 59, 59)', color: 'white', marginBottom: '30px', height: '450px', paddingTop: '10px' }}>
            <p style={{ color: 'rgba(4, 250, 250)', fontWeight: 900 }}>CONTACT US</p>
            <h1>Always Connect with us</h1>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
                <TextField style={{ backgroundColor: 'white', width: '50%' }} id="filled-basic" label="Email Address*" variant="filled" />
                <TextField style={{ marginTop: '15px', marginBottom: '15px', backgroundColor: 'white', width: '50%' }} id="filled-basic" label="Subject*" variant="filled" />
                <TextField style={{ backgroundColor: 'white', width: '50%', marginBottom: '30px' }} id="filled-basic" label="Your Message*" variant="filled" />
            </Box>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    );
};

export default ContactForm;