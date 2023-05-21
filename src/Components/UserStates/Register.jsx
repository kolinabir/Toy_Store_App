import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { createUser, updateProfileOfUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
        updateProfileOfUser(data.name, data.photo)
          .then(() => {
            console.log("photoupdated");
          })
          .catch((error) => {});
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-lg">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Name</h1>
          <input
            type="text"
            className="w-full rounded-lg border-2 px-4 py-2"
            defaultValue=""
            {...register("name")}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Email</h1>
          <input
            type="email"
            className="w-full rounded-lg border-2 px-4 py-2"
            defaultValue=""
            {...register("email")}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Password</h2>
          <input
            type="password"
            className="w-full rounded-lg border-2 px-4 py-2"
            defaultValue=""
            {...register("password")}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Photo URL</h2>
          <input
            type="text"
            className="w-full rounded-lg border-2 px-4 py-2"
            defaultValue=""
            {...register("photo")}
          />
        </div>

        <div className="my-3 text-center">
          {errors.exampleRequired && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            className="btn rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            type="submit"
            value="Register"
          />
        </div>
      </form>
      <h2 className="text-center">
        Already a user? Please{" "}
        <Link className="text-blue-500" to="/login">
          Login
        </Link>
      </h2>
    </div>
  );
};

export default Register;
