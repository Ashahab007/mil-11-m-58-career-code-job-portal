import React from "react";
// 1.0 initially we have created pages and router folder in src folder. then created in pages folder, Home, layout, Register, and shared (for Navbar, Footer).

import registerAnimation from "../../assets/lottie/Animation - 1748196286659.json";
import Lottie from "lottie-react";

// 4.0 my requirement is hide firebase username & password using environment variables. that's why from vite website from Env Variables and Modes according to documentation create a file name .env.local where package.json created
// 4.1 copy the code from firebase.init.js. and paste it in .env.local file then replace (: ") with (=) between all the key and value then remove (",) from every line of end.
// 4.2 Now from firebase .init.js file replace all the code with import.meta.env.(with the key used in .env.local i.e apiKey: import.meta.env.apiKey,)

// 3.0 firebase authentication for registration
const Register = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* 2.0 my requirement is creating a animation from lottie. So first
        download the animation from https://lottiefiles.com/. Select the
        animation then download the lottie JSON file. then install lottie react
        from https://www.npmjs.com/package/lottie-react "npm i lottie-react" */}
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "200px" }}
            animationData={registerAnimation}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelSubmit} className="card-body">
            <h1 className="text-4xl font-bold text-center">Register now!</h1>
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
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
