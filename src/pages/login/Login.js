import React, { useContext, useState } from "react";
import "./login.scss";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        setError(true);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  return (
    <section>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="box">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="container">
          <div className="form">
            <h2>Super Admin Panel Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input__box">
                <input
                  type="mail"
                  placeholder="Email - ck12@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input__box">
                <input
                  type="password"
                  placeholder="Password- 123456"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input__box">
                <input type="submit" value="Login" />
              </div>

              {error && <span> Wrong Email or PAssword!</span>}
              <p className="forget">
                Forgot Password? <a href="#">Click Here</a>
              </p>
              <p className="forget">
                Don't have an account? <a href="#">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    // <div classNameName="login">
    //   <h1> Super Admin Panel Login </h1>
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       placeholder="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Login</button>

    //     {error && <span> Wrong Email or PAssword!</span>}
    //   </form>
    // </div>
  );
};

export default Login;
