import React from "react";
import './sign-in.styles.css';
import {Link} from 'react-router-dom';
import SignIn from "../../components/sign-in/sign-in.component";
import {Grid} from '@mui/material';
import { logout } from "../../firebase/firebase";
const SignInPage= () => {

    return(
        <>
            <Grid container spacing={2}>
            <Grid item xs={12} md={7}>

            </Grid>
            <Grid item xs={12} md={5} pr={2}>
                
                <SignIn />
            </Grid>
            </Grid>    
        </>
    );
}

export default SignInPage;