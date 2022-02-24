import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
 // const[date,setDate]=useState('')
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="container">   
    <h3>Sign Up</h3>
   
    
   <label>Name</label>
        <input type="text" 
          className="form-control" 
          placeholder="Enter name" 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          />
    
    
        <label>Email address</label>
        <input type="email" 
          className="form-control" 
          placeholder="Enter email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          />
    
   
    
        <label>Password</label>
        <input type="password" 
          className="form-control" 
          placeholder="Enter password"  
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
    
    
        <label>Birthdate</label>
        <input type="date" 
        className="form-control" 
        placeholder="Enter your DOB" 
        
        />
    
     <button type="submit" className="btn btn-primary btn-block" style={{marginTop:"10px"}} onClick={register} >Sign Up</button><br />
     
    <button type="submit" className="btn btn-primary btn-block" style={{marginTop:"10px"}} onClick={signInWithGoogle}>Register with Google</button>
    <p className="forgot-password text-right">
        Already registered <Link to="/">Log in?</Link>
    </p>
    </div>

    
  );
}

export default Register;
