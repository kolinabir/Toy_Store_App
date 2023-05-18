import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <div className="mx-20 text-center my-20">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">Email</h1>
          <input
            type="email"
            className="border-4 rounded-lg input input-bordered input-info w-[50%] py-2"
            defaultValue=""
            {...register("email")}
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl  font-bold">Password</h2>
          <input
            type="password"
            className="border-4 input input-bordered input-info rounded-lg w-[50%] py-2"
            defaultValue=""
            {...register("password")}
          />
        </div>

        <div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <div className="flex justify-center my-3">
        <div
          className=" mx-auto 
      "
          class="px-6 sm:px-0 max-w-sm"
        >
          <button
            type="button"
            class="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
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
