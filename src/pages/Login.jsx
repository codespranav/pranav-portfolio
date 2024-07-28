import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../helper/helper';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {auth, setAuth} = useAuth();
  
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${BASE_URL}api/user/login`, { email, password });
      if (res?.data?.success) {
        toast.success('Logged in');
        setAuth({
          ...auth, 
          user: res.data,
          token: res.data?.token
        })
        await localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/admin/home")
      } else {
        toast.error(res?.data?.message || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during login. Please try again.');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className='h-screen w-full bg-slate-900 flex justify-center items-center'>
      <div className="login max-w-lg w-full p-4 bg-white">
        <h2 className='text-lg font-medium py-6'>Admin Login</h2>
        <div className="form p-2 flex flex-col">
          <input
            className='mb-4 p-3'
            type="text"
            placeholder='Email'
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='mb-4 p-3'
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='bg-neutral-900 text-purple-800 font-bold p-2 mt-3' onClick={loginUser}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
