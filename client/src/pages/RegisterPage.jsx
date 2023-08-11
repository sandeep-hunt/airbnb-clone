import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function registerUser(ev) {
        ev.preventDefault();
        axios.post('/register', {
            name,
            email,
            password,
        });
    }
    return (
        <React.Fragment>
            <div className='mt-4 grow flex items-center justify-around'>
                <div className="mb-32">
                    <h1 className="text-4xl text-center mb-4">Register</h1>
                    <form action="#" className='max-w-md mx-auto' onSubmit={registerUser}>
                        <input type="text" name="" id="" placeholder='John Doe' value={name} onChange={ev => setName(ev.target.value)} />
                        <input type="email" name="" id="" placeholder='your@email.com' value={email} onChange={ev => setEmail(ev.target.value)} />
                        <input type="password" name="" id="" placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)} />
                        <button className='primary'>Register</button>
                        <div className="text-center py-2 text-gray-500">Already a member? <Link to={'/login'} className="underline text-black">Login</Link></div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RegisterPage