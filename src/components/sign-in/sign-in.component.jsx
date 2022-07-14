import React from "react";
import { TextField,Button,Box } from '@mui/material';
import { signInWithGoogle } from "../../firebase/firebase.utils";
import GoogleIcon from '@mui/icons-material/Google';
import Google from "@mui/icons-material/Google";

function SignIn(){
    const handleSubmit=async event =>{
        console.log(event);
        event.preventDefault();

        // emailSignInStart(email,password);

    };

    const handleChange=event =>{
      const {value, name}=event.target;
    //   setCredentials({...userCredentials,[name]: value});
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
          id="outlined-required fullWidth"
          label="Email"
          type="email"
          defaultValue="your@mail.com"
          autoComplete="current-email"
        />
        <TextField
          id="outlined-password-input fullWidth"
          label="Password"
          type="password"
          fullWidth
          autoComplete="current-password"
        />
        <Button 
        id="fullWidth"
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
        id="fullWidth"
        startIcon={<GoogleIcon />}
        variant="contained"
        fullWidth
        onClick={signInWithGoogle}
        sx={{
            width: '175px',
            m:1,
            height: 56,
            }
          }
        >Sign In</Button>

        </Box>
        </>
    );
}
export default SignIn;