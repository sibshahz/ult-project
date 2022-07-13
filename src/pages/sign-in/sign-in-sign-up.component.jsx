import React from "react";
import './sign-in-sign-up.styles.css';
import {Link} from 'react-router-dom';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {Grid} from '@mui/material';
function SignInSignUp(){
    return(
        <>
<Grid container spacing={2}>
  <Grid item xs={12} md={7}>
    <SignUp />
  </Grid>
  <Grid item xs={12} md={5} pr={2}>
    <SignIn />
  </Grid>
</Grid>

    
        </>
    );
}

export default SignInSignUp;