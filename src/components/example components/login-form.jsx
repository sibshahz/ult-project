import React,{useState,useEffect} from "react";
export default function LoginForm({ onSubmit }) {
    const [userDetails,setUserDetails]=useState({username:'',password:''});
    const [isDisable,setIsDisabled]=useState(true);
  
    const {username,password}=userDetails;
  
    // useEffect(()=>{
    //   setIsDisabled(!isDisable);
  
    // },[isDisable]);
    const toggleDisable=()=>{
      if(username && password){
      setIsDisabled(false);
  
      }else{
        setIsDisabled(true);
      }
    };
  
    const handleChange=event=>{
      toggleDisable();
      console.log("USERNAME & PASSWORDS ARE: ", username+' '+password);
      const {value,name}=event.target;
      setUserDetails({...userDetails,[name]:value});
    }
  
    return (<div>
        <form>
          <input type='text' value={username} id='username-input' name='username' onChange={handleChange} />
          <input type='password' value={password} id='password-input' name='password' onChange={handleChange} />
          <button type='submit' value='submit' id="login-button" disabled={isDisable} onClick={()=>onSubmit(username,password)}>Submit</ button>
        </form>
    </div>);
  }