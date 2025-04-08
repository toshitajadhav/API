import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='p-4 border bg-white shadow rounded' style={{ minWidth: '300px', maxWidth: '400px' }}>
        <h3 className='text-center mb-4'>Details of User</h3>
        <p><strong>Name:</strong> <br />{data.name}</p>
        <p><strong>Email:</strong> <br />{data.email}</p>
        <p><strong>Phone:</strong> <br />{data.phone}</p>
        <div className='d-flex justify-content-center gap-3 mt-4'>
          <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
          <Link to="/" className='btn btn-primary'>Back</Link>
        </div>
      </div>
    </div>
  );
  
}

export default Read;
