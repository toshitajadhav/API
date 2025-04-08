import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios.delete('http://localhost:3000/users/' + id)
        .then(res => {
          // Remove deleted user from state
          setData(prev => prev.filter(user => user.id !== id));
        }).catch(err => console.log(err));
    }
  };

  return (
    <div className='container vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-4'>List of Users</h1>
      <div className='d-flex justify-content-end w-100 mb-3'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
      </div>
      <div className='table-responsive w-100'>
        <table className='table table-striped table-bordered text-center'>
          <thead className='table-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                    <button onClick={() => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
