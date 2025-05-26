import Lottie from "lottie-react";
import React, { use } from "react";
import loginAnimation from "../../assets/lottie/LoginAnimation - 1748238557797.json";
import { AuthContext } from "../../context/AuthContext";
import GoogleSignIn from "../shared/GoogleSignIn";

// 7.1 created the sign in component
const SignIn = () => {
  // 7.3
  const { signInUser, googleSignIn } = use(AuthContext);

  const handelSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // 7.4
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* 7.2 creating a animation from lottie. So first
    download the animation from https://lottiefiles.com/. Select the
    animation then download the lottie JSON file. then install lottie react
    from https://www.npmjs.com/package/lottie-react "npm i lottie-react" */}
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "450px" }}
            animationData={loginAnimation}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelSignIn} className="card-body">
            <h1 className="text-4xl font-bold text-center">Sign In</h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Sign In
              </button>
            </fieldset>
          </form>
          {/* 13.5 apply also GoogleSignIn component in signin   */}
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
