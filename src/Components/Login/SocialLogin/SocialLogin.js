import React from "react";
import google from "../../../images/social/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  const location = useLocation();
  const  from = location.state?.from?.pathname || "/";

  let errorElement;
  if (error ) {
    errorElement = <p>Error: {error?.message} </p>;
  }
  if (loading ) {
    return <Loading />
  }
  if (user) {
    navigate(from, { replace: true });
    
  }

  return (
    <div>
      <h4 className="text-danger">{errorElement}</h4>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-secondary d-block align-items-center mx-auto"
      >
        <img src={google} alt="" />
        <span className="mx-3">Google Sign In</span>
      </button>
      
    </div>
  );
};

export default SocialLogin;
