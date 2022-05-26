import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
  const {email, role} = user;
  const makeAdmin = () =>{
    fetch(`https://fast-scrubland-78671.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      if(res.status === 404){
        toast.error('Failed to make an admin');
      }
      return res.json()}
      )
    .then(data => {
      if(data.modifiedCount > 0){
        refetch()
        toast.success(`Successfully made an admin`);
      }
    })
  };

  return (
    <div>
<tr className='text-accent'>
        <th>{index + 1}</th>
        <td>{user.email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-primary">Make Admin</button>}</td>
        <td><button class="btn btn-xs btn-primary">Remove User</button></td>
      </tr>
    </div>
  );
};

export default UserRow;