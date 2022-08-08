import React from "react";
import './sign-up.styles.css';
import {Link} from 'react-router-dom';
import SignUp from "../../components/sign-up/sign-up.component";
import { logout } from "../../firebase/firebase";
import { Grid } from '@mantine/core';
function SignUpPage(){
    return(
        <>

<Grid>
      <Grid.Col span={6}><SignUp /></Grid.Col>
      <Grid.Col span={6}></Grid.Col>
</Grid>

    
        </>
    );
}

export default SignUpPage;