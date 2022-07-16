import React from "react";
import './sign-up.styles.css';
import {Link} from 'react-router-dom';
import SignUp from "../../components/sign-up/sign-up.component";
import {Grid} from '@mui/material';
import { logout } from "../../firebase/firebase";
function SignUpPage(){
    return(
        <>
<Grid container spacing={2}>
  <Grid item xs={12} md={7}>
    <SignUp />
  </Grid>
  <Grid item xs={12} md={5} pr={2}>
    
  </Grid>
</Grid>

    
        </>
    );
}

export default SignUpPage;