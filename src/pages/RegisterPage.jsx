import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);
  return (
    <div className="h-screen bg-zinc-900 flex justify-center items-center">
      <form onSubmit={onSubmit} className="max-w-md bg-zinc-700 p-5 rounded-md">
        <span className="text-2xl font-semibold text-white">Register</span>
        <input
          type="text"
          className="p-2 my-2 rounded-md w-full"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="text-red-500">Username is required.</span>
        )}
        <input
          type="email"
          className="p-2 my-2 rounded-md w-full"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="text-red-500">Email is required.</span>}
        <input
          type="password"
          className="p-2 my-2 rounded-md w-full"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">Password is required.</span>
        )}
        <button
          type="submit"
          className="bg-indigo-500 text-zinc-300 font-bold w-full my-2 p-2 rounded-md hover:bg-indigo-600 duration-300"
        >
          Register
        </button>
        <p className="text-zinc-500 py-2 flex gap-3">
          Already have an account?{" "}
          <Link
            className="text-indigo-500 font-bold hover:text-zinc-400"
            to="/login"
          >
            Sign in
          </Link>
        </p>
        {registerErrors.map((error, index) => (
          <div className="text-red-500" key={index}>
            {error}
          </div>
        ))}
      </form>
    </div>
  );
}
