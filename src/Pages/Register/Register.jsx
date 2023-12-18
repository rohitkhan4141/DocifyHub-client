/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const Register = () => {
  const { signup } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit handler
  const onFormSubmit = async (data) => {
    let userData = {
      fullName: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const result = await signup(userData);
      if(!result.success) {
        setError(result.error.error);
        return
      }
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <div className='px-3'>
      <h1 className='text-4xl text-center font-bold mt-16 mb-8'>Register</h1>
      <div className='flex justify-center items-center'>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className='w-full lg:w-1/3 mx-auto'
        >
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type='text'
              placeholder='name'
              className='input input-bordered w-full input-accent'
            />
            {errors.name && (
              <span className='text-red-400 my-2'>
                This field cant be empty
              </span>
            )}
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type='email'
              placeholder='email'
              className='input input-bordered input-accent w-full text-gray'
            />
            {errors.email && (
              <span className='text-red-400 my-2'>
                This field cant be empty
              </span>
            )}
          </div>
          <div className='form-control w-full'>
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
            to='/Login'
          >
            Have an account? Login
          </Link>
          <input
            type='submit'
            value='Register'
            className='btn btn-accent w-full mt-5'
          />
           <Link to={"/"}>
              <a className='btn btn-ghost w-full mt-5'>Back To Home</a>
          </Link>
        </form>
      </div>
      <p className='text-center text-red-800'>{error}</p>
    </div>
  );
};

export default Register;









