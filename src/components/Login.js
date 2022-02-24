import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    
     <div className="container">
    <h3>Log In</h3>
    <div className="form-group">
        <label>E-Mail</label>
        <input type="email" className="form-control" placeholder="Enter your Mail" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
    </div>
    
    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
    </div>
    <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div>
   
    <button type="submit" className="btn btn-primary btn-block"   onClick={()=> logInWithEmailAndPassword(email, password)}>Submit</button><br/>
    
    
    <button type="submit" className="btn btn-primary btn-block" style={{marginTop:"10px", alinItems:"centre"}} onClick={signInWithGoogle}> Login with Google </button>
    <p className="forgot-password text-right">
        Forgot  <Link to="/reset">password?</Link>
    </p>
    <p className="forgot-password text-right">New User?<Link to="/register">signup</Link></p>
    </div>

  );
}

export default Login;
