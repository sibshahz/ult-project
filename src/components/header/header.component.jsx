import React from "react";
// import { logout } from "../../firebase/firebase";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.css';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import AccountMenu from "../account-menu/account-menu.component";
import { Group,Text,Button } from '@mantine/core';
import {Link} from "react-router-dom";

class HeaderComponent extends React.Component{
    

    render(){

        return(
            <div className="header-menu">
                <Group position="apart" pr="lg" pl="lg">
                <Text weight={800} ml="lg" >ULT-PROJECT</Text>
                 {
                        this.props.currentUser ?
                        <AccountMenu user={this.props.currentUser} />
                        : <Group position="apart" mt="md">
                        <Link to="/sign-in"><Button>Sign In</Button></Link>
                        
                        <Link to="/sign-up">
                            <Button 
                            variant="outline"
                            >Sign up</Button>
                        </Link>
                        </Group>
                }
                </Group>
                </div>
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
  
export default connect(mapStateToProps)(HeaderComponent);