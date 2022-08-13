import {useEffect} from "react";
import {connect} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../../firebase/firebase';
import { Loader } from '@mantine/core';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";



const RequireAuth = ({ children,navigateTo,currentUser }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (!currentUser) navigate('/sign-in');
      

      }, [currentUser]);

    return(
      !currentUser ? <Loader sx={{ position:'absolute',width:"10%",height:"10%",top:"45%",left:"45%" }} /> : children
    ) 
};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});



export default connect(
  mapStateToProps,
  null
)(RequireAuth);