import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useUpdateProfile } from 'react-firebase-hooks/auth';


const SignUP = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  // const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  if(loading || gLoading || updating){
    return <Loading></Loading>
  }

  let signInError;
  if(error || gError || updateError){
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
  }
  // if(token){
  //   navigate('/appointment')
  // }
  if(user || gUser){
    navigate('/')
  }

  const onSubmit = async(data) => {
    console.log(data);
  await  createUserWithEmailAndPassword(data.email, data.password )
  await updateProfile({ displayName: data.name });
  console.log(updateProfile)
  navigate('/')
 
  }
  return (
    <div className="card  h-screen justify-center items-center">
    <div className='card w-100 bg-white shadow-2xl'>
    <div className="card-body">
    <h2 className="text-center text-accent text-2xl font-bold">Sign UP</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-black text-xl">Name</span>
      </label>
      <input 
      type="text" 
      placeholder="Name" 
      className="input input-bordered w-full max-w-xs border-accent text-white text-xl" 
      {...register("name", {
        required: {
          value: true,
          message: 'Name is Required'
        }
      }
      )}
      />
      <label className="label">
      {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
      </label>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-black text-xl">Email</span>
      </label>
      <input 
      type="email" 
      placeholder="Your Email" 
      className="input input-bordered w-full max-w-xs border-accent text-white text-xl" 
      {...register("email", {
        required: {
          value: true,
          message: 'Email is Required'
        },
        pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
        }
      }
      )}
      />
      <label className="label">
      {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
      {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
      </label>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-black text-xl">Password</span>
      </label>
      <input 
      type="password" 
      placeholder="Password" 
      className="input input-bordered w-full max-w-xs border-accent text-white text-xl" 
      {...register("password", {
        required: {
          value: true,
          message: 'password is Required'
        },
        minLength: {
          value: 6,
          message: 'Must be 6 characters to longer' // JS only: <p>error message</p> TS only support string
        }
      }
      )}
      />
      <label className="label">
      {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
      {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
      </label>
    </div>    
    {signInError}
      <input className='btn w-full max-w-xs bg-black text-white font-bold' type="submit" value="Signup" />
    </form>
    <p className='text-black'>Already have an account? <Link to="/login" className='text-accent'>Please Login</Link></p>
    <div className="divider text-black text-xl">OR</div>
    <button 
    className="btn btn-outline uppercase text-xl border-accent text-accent"
    onClick={() => signInWithGoogle()}
    >Continue with Google</button>
    </div>
    </div>
  </div>
  );
};

export default SignUP;