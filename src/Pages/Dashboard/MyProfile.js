import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
  // const {productId} = useParams();
  // const [product] = useProducts(productId);
  // const [quantity, setQuantity] = useState();

  const [user, loading, error] = useAuthState(auth);

  if(loading){
    return <Loading></Loading>
  }

  const handleOrder = event => {
    // event.preventDefault();
    // if(event.target.quantity.value > 200 && event.target.quantity.value < 1000){
    //   setQuantity(event.target.quantity.value);
    // }
    // else{
    //   return alert(`please, min order ${product.minimum} and max ${product.maximum}`)
    // }

    const profile = {
      
      customerName: user.displayName,
      customer: user.email,
      education: event.target.education.value,
      city: event.target.city.value,
      phone: event.target.phone.value,
      linkedin: event.target.linkedin.value
    }
    fetch('https://fast-scrubland-78671.herokuapp.com/order',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      toast('order successfully!')
    })
  }
 
  return (
    <div>
      <div className='card flex h-screen justify-center items-center'>
     <div className="card w-100  shadow-2xl">
      <div className="card">
      <h2 className="text-3xl text-accent text-center font-bold mt-6">My Profile</h2>
      <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center lg:p-8'>
      <input type="text" name='name' readOnly value={user?.displayName || ''} className="input input-bordered input-success w-full max-w-xs text-lg text-white my-4" />
      <input type="email" name='email'readOnly value={user?.email || ''} className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='city' placeholder='City'  className="input input-bordered input-success w-full max-w-xs text-lg text-white my-4" />
      <input type="email" name='education' placeholder='education' className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='linkedin' placeholder="Linkedin Profile Link" className="input input-bordered input-success w-full max-w-xs text-lg text-white" />

      <input type="submit" value="Add" className="bg-black btn-sm rounded-md w-full max-w-xs border-accent text-accent text-lg font-bold cursor-pointer"/>
      </form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default MyProfile;