import React from "react";
import './sign-up.styles.css';
import {Link} from 'react-router-dom';
import SignUp from "../../components/sign-up/sign-up.component";
import { logout } from "../../firebase/firebase";
import { Grid,Image } from '@mantine/core';
import SignUpImage from '../../assets/imgs/sign-up-screen.png';
function SignUpPage(){
    return(
        <>

<Grid>
      <Grid.Col span={6}><SignUp /></Grid.Col>
      <Grid.Col span={6}>
      <Image
        sx={{ 
            opacity:0.7,
            maxWidth:"80%",
            textAlign:'center',
            marginTop:'10%',
            marginLeft:'10%'
         }}
        src={SignUpImage}
        alt="Remote Team Working"
        />
      </Grid.Col>
</Grid>

    
        </>
    );
}

export default SignUpPage;