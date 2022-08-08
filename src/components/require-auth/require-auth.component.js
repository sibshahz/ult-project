import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../../firebase/firebase';
import { Loader } from '@mantine/core';



const RequireAuth = ({ children,navigateTo }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (!user) navigate('/sign-in');
      if (loading) return;

      }, [user, loading]);

    return(
      !user ? <Loader sx={{ position:'absolute',width:"10%",height:"10%",top:"45%",left:"45%" }} /> : children
    ) 
};
export default RequireAuth;