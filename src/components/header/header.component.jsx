import React from "react";
import { auth } from "../../firebase/firebase";
// import { logout } from "../../firebase/firebase";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Navigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import './header.styles.css';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

class Header extends React.Component{
    

    render(){

        return(
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                   
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Ult-Project
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                    {
                        this.props.currentUser ?
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="account"
                            sx={{ mr: 2 }}
                            onClick={() => auth.signOut()}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                        : null
                    }
                    </Toolbar>
                    
                </AppBar>
                </Box>
            // this.props.currentUser ?
            // <div>
            //     <h4>{this.props.currentUser.name}</h4>
            //     <h5>{this.props.currentUser.email}</h5>
            //     <LogoutIcon className="logOutButton" onClick={() => auth.signOut()} />
            // </div>    
            // :
            // <div></div>
        );
    }

}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
  
export default connect(mapStateToProps)(Header);