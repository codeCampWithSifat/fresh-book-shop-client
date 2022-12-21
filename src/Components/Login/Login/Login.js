import React, { useRef } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let errorElement;
  if (error) {
     errorElement =  <p>Error: {error?.message}</p>
  }
  if (loading) {
    return <Loading />
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    // console.log(name, password);
  };
  return (
    <div className="container mt-5 mx-auto w-50">
      <form onSubmit={handleLoginForm}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={emailRef}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={passwordRef}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Login
        </button>
        <h4 className="text-danger my-2">{errorElement}</h4>
        <p className="mt-3">
          New On Our Site <Link to="/register">Please Register</Link>
        </p>
      </form>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-3 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

      <SocialLogin />
    </div>
  );
};

export default Login;
