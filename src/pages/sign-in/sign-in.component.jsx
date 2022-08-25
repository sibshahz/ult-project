import React from "react";
import './sign-in.styles.css';
import {Link} from 'react-router-dom';
import SignIn from "../../components/sign-in/sign-in.component";
import { logout } from "../../firebase/firebase";
import { Grid,Image } from '@mantine/core';
import SignInImage from '../../assets/imgs/sign-in-screen.png';
const SignInPage= () => {

    return(
        <>
            <Grid>
      <Grid.Col span={6}>
      <Image
        sx={{ 
            opacity:0.7,
            maxWidth:"80%",
            textAlign:'center',
            marginTop:'10%',
            marginRight:'10%'
         }}
        src={SignInImage}
        alt="Remote Team Working"
        />

      </Grid.Col>
      <Grid.Col span={6}><SignIn /></Grid.Col>
</Grid>   
        </>
    );
}

export default SignInPage;