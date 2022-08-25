import React,{useState,useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";

import { auth,signInWithGoogle,logInWithEmailAndPassword } from "../../firebase/firebase";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { TextInput, Button, Group,Box } from '@mantine/core';
import {IconBrandGoogle} from '@tabler/icons';


const SignIn=({currentUser})=>{
  const [userCredentials,setCredentials]=useState({email:'',password:''});
  const {email, password}=userCredentials;
  // const [currentUser, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) navigate("/dashboard");
  });
  const handleSubmit=async event =>{
      event.preventDefault();

      logInWithEmailAndPassword(email,password);

  };
  const handleChange=event =>{
      const {value, name}=event.target;
      setCredentials({...userCredentials,[name]: value});
  };

    return(
      <>
      <h2>Sign In</h2>
        <Box>
        <div className="sign-in">
            
         <TextInput
          required
          onChange={handleChange}
          label="Email"
          placeholder="Email"
          type="email"
          value={email}
          name="email"
        />
        <TextInput
          required
          mt="md"
          onChange={handleChange}
          label="Password"
          placeholder="Password"
          value={password}
          type="password"
          name="password"
        />
        <Group position="apart" mt="md">
        <Button 
        sx={{ 
          minWidth:100
         }}
        onClick={handleSubmit}

        >Sign In</Button>
        
        <Button 
        sx={{ 
          minWidth:100
         }}
         leftIcon={<IconBrandGoogle  />}
        onClick={signInWithGoogle}
        variant="outline"
        >Sign in</Button>
        </Group>
        </div>
          <p>Dont have an account yet? <Link to={'/sign-up'}>Sign up</Link> </p>
        </Box>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});



export default connect(
  mapStateToProps
)(SignIn);
