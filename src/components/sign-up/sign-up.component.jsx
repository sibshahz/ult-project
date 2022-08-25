import React,{useState,useEffect} from "react";
import {connect} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth,registerWithEmailAndPassword,signInWithGoogle} from '../../firebase/firebase';
import {IconBrandGoogle} from '@tabler/icons';
import { TextInput, Button, Group,Box } from '@mantine/core';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selectors";
function SignUp({currentUser}){
    const [userCredentials,setCredentials]=useState({signUpName:'',signUpEmail:'',signUpPassword:'',confirmPassword:''});
    const {signUpName,signUpEmail, signUpPassword,confirmPassword}=userCredentials;
    const navigate = useNavigate();
    useEffect(() => {
        if (currentUser) navigate("/dashboard");
    });
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
                <Group position="apart" mt="md">
                <Button onClick={handleSubmit}>Sign up</Button>
                <Button leftIcon={<IconBrandGoogle  />}
                    onClick={signInWithGoogle}
                    variant="outline">Sign up</Button>
                </Group>
                <p>Already have an account? <Link to={'/sign-in'}>Sign in</Link> </p>
            </Box>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
  
  
  
  export default connect(
    mapStateToProps
  )(SignUp);
  