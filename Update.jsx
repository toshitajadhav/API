import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3000/users/' + id, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light text-center">
  <div className="border bg-white shadow px-4 py-5 rounded" style={{ width: '100%', maxWidth: '500px' }}>
    <h2 className="mb-4">Update User</h2>
    <form onSubmit={handleUpdate}>
      <div className="mb-3 text-start">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
      </div>
      <div className="mb-3 text-start">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </div>
      <div className="mb-4 text-start">
        <label htmlFor="phone" className="form-label">Phone:</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          placeholder="Enter Phone"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button type="submit" className="btn btn-success">Submit</button>
        <Link to="/" className="btn btn-primary">Back</Link>
      </div>
    </form>
  </div>
</div>

  );
  
}
