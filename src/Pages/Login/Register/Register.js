import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            <Alert severity="warning">Your password did not match</Alert>
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);
        const fieldClean = document.querySelectorAll('#standard-basic');
        fieldClean.forEach(input => {
            input.value = '';
        });

        e.preventDefault();
    };
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 12 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            variant="standard"
                            name="Name"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            placeholder='at least 6 characters'
                            label="Your Password"
                            variant="standard"
                            name="password"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            placeholder='at least 6 characters'
                            label="Retype Your Password"
                            variant="standard"
                            name="password2"
                            onBlur={handleOnBlur}
                        />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Submit</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button sx={{ width: "75%", m: 1 }} variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "75%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;