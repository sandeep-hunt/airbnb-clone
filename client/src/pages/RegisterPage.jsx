import React from 'react';
import {Link} from 'react-router-dom';

function RegisterPage() {
    return (
        <React.Fragment>
            <div className='mt-4 grow flex items-center justify-around'>
                <div className="mb-32">
                    <h1 className="text-4xl text-center mb-4">Register</h1>
                    <form action="#" className='max-w-md mx-auto'>
                        <input type="text" name="" id="" placeholder='John Doe' />
                        <input type="email" name="" id="" placeholder='your@email.com' />
                        <input type="password" name="" id="" placeholder='password' />
                        <button className='primary'>Register</button>
                        <div className="text-center py-2 text-gray-500">Already a member? <Link to={'/login'} className="underline text-black">Login</Link></div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RegisterPage