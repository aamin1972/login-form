import { useState } from "react";
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState(""); 
  const [signupMessage, setSignupMessage] = useState("");

     const handleSignup = async () => {
  const response = await fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName,
      email,
      password,
    }),
  });

  const data = await response.json();

setSignupMessage(data.message);
};

  // Congratulations page
  if (isLoggedIn) {
    return (
      <div className="container">
        <div className="congratulation-box">
          <div className="success-icon">✓</div>


          <h1>Congratulations!</h1>

<div className="party-emoji">🎉</div>

          <p>You have successfully logged in.</p>

          <button
  onClick={() => {
    setIsLoggedIn(false);
    setIsSignup(true);
  }}
>
  Back to Signup
</button>

          {/* <button onClick={() => setIsLoggedIn(false)}>
            Back to Login
          </button> */}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="login-box">

        <h1>{isSignup ? "Sign Up" : "Login"}</h1>

        {isSignup && (
          <input
  type="text"
  placeholder="Full Name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
/>
        )}

        <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

        <div className="password-box">
          <input
  type={showPassword ? "text" : "password"}
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

          <span
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {!isSignup && (
          <p className="forgot">
            Forgot password?
          </p>
        )}

        <button
  onClick={() => {
    if (isSignup) {
      handleSignup();
    } else {
      setIsLoggedIn(true);
    }
  }}
>
  {isSignup ? "Sign Up" : "Login"}
</button>

{isSignup && signupMessage && (
  <p>{signupMessage}</p>
)}
        <p className="switch">
          {isSignup
            ? "Already a member?"
            : "Not a member?"}

          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Login" : " Signup now"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default App;