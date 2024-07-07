
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import usersData from '../data/temp.json';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setUsers(usersData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <div className="card-image"></div>
            <div className="card-info">
              <p>Name: {user.name}</p>
              <p>Rating: {user.rating}</p>
              <p>Domains: {user.domains.join(', ')}</p>
              <p>Previous Experience: {user.prev_experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;