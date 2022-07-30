import React,{useState,useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { TextField,Button,Box } from '@mui/material';
import { auth,signInWithGoogle,logInWithEmailAndPassword } from "../../firebase/firebase";
import GoogleIcon from '@mui/icons-material/Google';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';


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
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1 },
                
            }}
            validate
            autoComplete="on"
            >
        <div className="sign-in">
            
         <TextField
          required
          fullWidth
          onChange={handleChange}
          id="outlined-required-two fullWidthOne"
          label="Email"
          type="email"
          value={email}
          name="email"
          defaultValue="your@mail.com"
          autoComplete="current-email"
        />
        <TextField
          id="outlined-password-input fullWidthTwo"
          onChange={handleChange}
          label="Password"
          value={password}
          type="password"
          name="password"
          fullWidth
          autoComplete="current-password"
        />
        <Button 
        id="fullWidth"
        onClick={handleSubmit}
        variant="contained"
        fullWidth
        sx={{
            width: '175px',
            m:1,
            height: 56,
            }
          }
        >Sign In</Button>
        </div>
        <Button 
        id="fullWidthThree"
        onClick={signInWithGoogle}
        startIcon={<GoogleIcon />}
        variant="contained"
        fullWidth
        sx={{
            width: '175px',
            m:1,
            height: 56,
            }
          }
        >Sign In</Button>
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
