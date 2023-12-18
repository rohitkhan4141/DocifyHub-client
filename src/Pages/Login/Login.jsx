/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    setError("");
    const result = await login(data);
    if(!result.success) return;
    navigate(from, { replace: true });
  };


  return (
    <div className='w-full px-3'>
      <h1 className='text-4xl text-center font-bold mt-16 mb-8'>Login</h1>
      <div className='w-full md:w-1/3 mx-auto p-x-5'>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type='email'
              placeholder='email'
              className='input input-bordered w-full text-gray input-accent'
            />
            {errors.email && (
              <span className='text-red-400 my-2'>
                This field cant be empty
              </span>
            )}
          </div>
          <div className='form-control w-full mb-3'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "password should be min 6 charecters long",
                },
              })}
              type='password'
              placeholder='password'
              className='input input-bordered w-full input-accent'
            />
            {errors.password && (
              <span className='text-red-400 my-2'>
                {errors.password?.message}
              </span>
            )}
          </div>
          <Link
            className='label-text-alt link link-hover text-rose-400 text-base'
            to='/register'
          >
            Haven't an account? Register
          </Link>
          <input type='submit' className='btn btn-accent w-full mt-5' />
          <Link to={"/"}>
              <button className='btn btn-ghost w-full mt-5'>Back To Home</button>
          </Link>
        </form>
      </div>
      <p className='text-center text-rose-700 my-1'>{error}</p>
    </div>
  );
};

export default Login;
