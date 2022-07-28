import React,{useState,useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import {Box,TextField,Button} from '@mui/material';
import {auth,registerWithEmailAndPassword} from '../../firebase/firebase';

function SignUp(){
    const [userCredentials,setCredentials]=useState({signUpName:'',signUpEmail:'',signUpPassword:'',confirmPassword:''});
    const {signUpName,signUpEmail, signUpPassword,confirmPassword}=userCredentials;
    // const [user, loading, error] = useAuthState(auth);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (loading) return;
    //     if (user) navigate("/dashboard");
    //   }, [user, loading]);
    const handleSubmit=() =>{

        if(signUpPassword!==confirmPassword){
            alert("Passwords don't match");
            return;
        }  
        registerWithEmailAndPassword(signUpName,signUpEmail,signUpPassword);

    };
    const handleChange=event =>{
        const {value, name}=event.target;
        setCredentials({...userCredentials,[name]: value});
    };

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
                onChange={handleChange}
                name="signUpName"
                id="outlined-required-one"
                label="Name"
                defaultValue="John Doe"
                autoComplete="current-name"
                />
                <TextField
                sx={{ width:'46%' }}
                required
                fullWidth
                onChange={handleChange}
                name="signUpEmail"
                id="outlined-required-two"
                label="Email"
                type="email"
                defaultValue="your@mail.com"
                autoComplete="current-email"
                />
                <TextField
                sx={{ width:'46%' }}
                id="outlined-password-input"
                name="signUpPassword"
                label="Password"
                onChange={handleChange}
                type="password"
                autoComplete="current-password"
                />
                <TextField
                sx={{ width:'46%' }}
                id="outlined-password-input-two"
                name="confirmPassword"
                onChange={handleChange}
                label="Confirm Password"
                type="password"
                />
                <Button 
                id="sign-in-button fullWidthTwo"
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                sx={{
                    width: '175px',
                    m:1,
                    height: 56,
                    }
                }
                >Sign up</Button>
                <p>Already have an account? <Link to={'/sign-in'}>Sign in</Link> </p>
            </Box>
        </>
    );
}

export default SignUp;