import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-100' style={{ maxWidth: '500px' }}>
        <div className='border bg-white shadow px-5 py-4 rounded'>
          <h2 className='text-center mb-4'>Add User</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                name='name'
                className='form-control'
                placeholder='Enter Name'
                onChange={e => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                name='email'
                className='form-control'
                placeholder='Enter Email'
                onChange={e => setValues({ ...values, email: e.target.value })}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="phone" className="form-label">Phone:</label>
              <input
                type="text"
                name='phone'
                className='form-control'
                placeholder='Enter Phone'
                onChange={e => setValues({ ...values, phone: e.target.value })}
              />
            </div>
            <div className="d-flex justify-content-center gap-3">
              <button type='submit' className='btn btn-success'>Submit</button>
              <Link to="/" className='btn btn-primary'>Back</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
