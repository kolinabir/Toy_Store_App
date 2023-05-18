import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        
      });
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Name</h1>
          <input
            type="text"
            className="border-2 rounded-lg px-4 py-2 w-full"
            defaultValue=""
            {...register("name")}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Email</h1>
          <input
            type="email"
            className="border-2 rounded-lg px-4 py-2 w-full"
            defaultValue=""
            {...register("email")}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Password</h2>
          <input
            type="password"
            className="border-2 rounded-lg px-4 py-2 w-full"
            defaultValue=""
            {...register("password")}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Photo URL</h2>
          <input
            type="text"
            className="border-2 rounded-lg px-4 py-2 w-full"
            defaultValue=""
            {...register("photo")}
          />
        </div>

        <div className="text-center my-3">
          {errors.exampleRequired && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
