import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { Login, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    Login(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        navigate(from, { replace: true });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="mx-20 my-20 text-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">Email</h1>
          <input
            type="email"
            className="input-bordered input-info input w-[50%] rounded-lg border-4 py-2"
            defaultValue=""
            {...register("email")}
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl  font-bold">Password</h2>
          <input
            type="password"
            className="input-bordered input-info input w-[50%] rounded-lg border-4 py-2"
            defaultValue=""
            {...register("password")}
          />
        </div>

        <div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="btn-primary btn" type="submit" value="Login" />
        </div>
      </form>
      <div className="my-3 flex justify-center">
        <div
          className=" mx-auto max-w-sm px-6 sm:px-0
      "
        >
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="dark:focus:ring-[#4285F4]/55  mb-2 mr-2 inline-flex items-center justify-between rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
          >
            <svg
              className="-ml-1 mr-2 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Login with Google<div></div>
          </button>
        </div>
      </div>
      <h2>
        Not a user? Please{" "}
        <Link className="text-blue-500" to="/register">
          Register
        </Link>
      </h2>
    </div>
  );
};

export default Login;
