import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 12 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            onBlur={handleOnChange}
                        /><br />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Your Password"
                            variant="standard"
                            name="password"
                            onBlur={handleOnChange}
                        />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button sx={{ width: "75%", m: 1 }} variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <br />
                    <br />
                    <Button onClick={handleGoogleSignIn} sx={{ width: "75%", m: 1 }} variant="contained">Google Sign in</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "75%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;