import React from "react";
import './sign-in.styles.css';
import {Link} from 'react-router-dom';
import SignIn from "../../components/sign-in/sign-in.component";
import { logout } from "../../firebase/firebase";
import { Grid } from '@mantine/core';
const SignInPage= () => {

    return(
        <>
            <Grid>
      <Grid.Col span={6}></Grid.Col>
      <Grid.Col span={6}><SignIn /></Grid.Col>
</Grid>   
        </>
    );
}

export default SignInPage;