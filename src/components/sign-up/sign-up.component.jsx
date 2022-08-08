import React,{useState,useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth,registerWithEmailAndPassword} from '../../firebase/firebase';

import { TextInput, Button, Group,Box } from '@mantine/core';

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
            <Box>
                <TextInput
                required
                onChange={handleChange}
                name="signUpName"
                placeholder="Name"
                label="Name"
                defaultValue="John Doe"
                />
                <TextInput
                mt="md"
                required
                onChange={handleChange}
                name="signUpEmail"
                placeholder="you@mail.com"
                label="Email"
                type="email"
                />
                <TextInput
                mt="md"
                required
                name="signUpPassword"
                label="Password"
                placeholder="Password"
                onChange={handleChange}
                type="password"
                />
                <TextInput
                mt="md"
                required
                name="confirmPassword"
                onChange={handleChange}
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                />
                <Button 
                mt="md"
                onClick={handleSubmit}
                sx={{ 
                    minWidth:100
                   }}
                >Sign up</Button>
                <p>Already have an account? <Link to={'/sign-in'}>Sign in</Link> </p>
            </Box>
        </>
    );
}

export default SignUp;