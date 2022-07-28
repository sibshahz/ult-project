import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../../firebase/firebase';


const RequireAuth = ({ children,navigateTo }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (!user) navigate(navigateTo);
      }, [user, loading]);

    return children;
};
export default RequireAuth;