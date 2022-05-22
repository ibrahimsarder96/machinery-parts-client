import React from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';



const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  if(gUser){
    console.log(gUser)
  }
  return (
    <div className='flex justify-center items-center py-8'>
      <div className="card h-screen shadow-2xl bg-white">
        <div className="card-body">
         <h2 className="text-3xl text-black text-center">Login</h2>
        <div className="divider">OR</div>
        <button 
    className="btn btn-outline uppercase text-xl border-accent text-accent"
    onClick={() => signInWithGoogle()}
    >Continue with Google</button>
  </div>
</div>
    </div>
  );
};

export default Login;