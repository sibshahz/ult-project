import React from "react";
import { auth } from "../../firebase/firebase";
// import { logout } from "../../firebase/firebase";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Navigate, useLocation } from 'react-router-dom';
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import './header.styles.css';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header=({currentUser})=>{
    return(
        currentUser ?
        <div>
            <h4>{currentUser.name}</h4>
            <h5>{currentUser.email}</h5>
            <LogoutIcon className="logOutButton" onClick={() => auth.signOut()} />
        </div>    
        :
        null 
    );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
  
export default connect(mapStateToProps)(Header);