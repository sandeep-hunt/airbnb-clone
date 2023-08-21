import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    const { ready,user, setUser } = useContext(UserContext);
    let {subpage} = useParams();
    if(subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setUser(null);
        setRedirect('/');
    }

    if(!ready) {
        return 'Loading...';
    }

    if(ready && !user) {
        return <Navigate to={'/login'} />
    }

    function linkClasses (type=null) {
        let classes = 'py-2 px-6';
        if(type === subpage) {
            classes += ' bg-primary text-white rounded-full';
        }
        return classes;
    }

    if(redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <React.Fragment>
            <nav className='w-full flex justify-center mt-8 gap-4 mb-8'>
                <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My Accommodations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br/>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
        </React.Fragment>
    )
}

export default AccountPage