import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";


function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    
      <div className="container">
        <h4>Reset Your Password</h4>
       
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="btn btn-primary btn-block" style={{marginTop:"10px"}} onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>
       

        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    
  );
}

export default Reset;
