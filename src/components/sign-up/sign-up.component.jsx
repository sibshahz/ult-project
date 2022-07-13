import React from "react";
import {Link} from 'react-router-dom';
import {Box,TextField,Button} from '@mui/material';
function SignUp(){
    return(
        <>
            <h2>Sign Up</h2>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1 },
            }}
            validate
            autoComplete="on"
            >
                <TextField
                sx={{ width:'46%' }}
                required
                fullWidth
                id="outlined-required"
                label="Name"
                defaultValue="John Doe"
                autoComplete="current-name"
                />
                <TextField
                sx={{ width:'46%' }}
                required
                fullWidth
                id="outlined-required"
                label="Email"
                type="email"
                defaultValue="your@mail.com"
                autoComplete="current-email"
                />
                <TextField
                sx={{ width:'46%' }}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />
                <TextField
                sx={{ width:'46%' }}
                id="outlined-password-input"
                label="Confirm Password"
                type="password"
                />
                <Button 
                id="sign-in-button fullWidth"
                variant="contained"
                fullWidth
                sx={{
                    width: '175px',
                    m:1,
                    height: 56,
                    }
                }
                >Sign up</Button>
            </Box>
        </>
    );
}

export default SignUp;