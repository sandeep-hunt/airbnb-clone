import axios from 'axios';
import React, { useState } from 'react';
import {Link} from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await axios.post('/login', {email, password});
    }
    catch (e) {
      alert('Login failed');
    }
  }
  return (
    <React.Fragment>
      <div className='mt-4 grow flex items-center justify-around'>
        <div className="mb-32">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form action="#" className='max-w-md mx-auto' onSubmit={handleLoginSubmit}>
            <input type="email" name="" id="" placeholder='your@email.com' value={email} onChange={ev => setEmail(ev.target.value)} />
            <input type="password" name="" id="" placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)} />
            <button className='primary'>Login</button>
            <div className="text-center py-2 text-gray-500">Dont have an account yet? <Link to={'/register'} className="underline text-black">Register Now</Link></div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginPage