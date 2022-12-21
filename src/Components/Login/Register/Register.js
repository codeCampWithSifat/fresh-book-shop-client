import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";
import { useUpdateProfile } from 'react-firebase-hooks/auth';


const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const [passwordError, setPasswordError] = useState("")
  if (error) {
    return (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />
  }
  if (user) {
    console.log(user);
    return (
      <div>
        <p>Registered User: {user?.user.email}</p>
      </div>
    );
  }
  const handleRegisterForm = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if(password !== confirmPassword) {
        return setPasswordError("Password Not Matched")
    } if (password.length < 6) {
      return setPasswordError("Password Must Be 6 Or Characters")
    }
    await createUserWithEmailAndPassword(email,password)
    await updateProfile({displayName : name})
    // console.log(name, email, password, confirmPassword);
  };
  return (
    <div className="container mt-5 mx-auto w-50">
      <form onSubmit={handleRegisterForm}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="name"
            required
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="confirmPassword"
            required
          />
          <label htmlFor="floatingPassword">Confirm Password</label>
        </div>
        <h5 className="text-danger">{passwordError}</h5>
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Register
        </button>
        <p className="mt-3">
          Already Have An Account <Link to="/login">Please Login</Link>
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

export default Register;
