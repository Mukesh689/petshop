// Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
      } catch (err) {
        console.error('Profile fetch error:', err);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className='text-light'>
      <h2 className='text-light'>Welcome, {profile.name}</h2>
      <p className='text-light'>Email: {profile.email}</p>
      <p className='text-light'>Role: {profile.role}</p>
    </div>
  );
};

export default Profile;
