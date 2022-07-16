import React,{useState,useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../../firebase/firebase";
function Dashboard(){
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) navigate("/sign-in-sign-up");
  }, [user, loading]);
    return(
        <h1>Dashboard</h1>
    );
}
export default Dashboard;