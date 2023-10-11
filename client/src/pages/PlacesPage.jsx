import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Perks from '../Perks';

function PlacesPage() {
    const { action } = useParams();
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [photoLink,setPhotoLink] = useState('');
    const [Description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);

    return (
        <React.Fragment>
            {action !== 'new' && (
                <div className='text-center'>
                    <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new place
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form action="#">
                        <h2 className='text-xl mt-4'>Title</h2>
                        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder='title' />
                        <h2 className='text-xl mt-4'>Address</h2>
                        <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder='address' />
                        <h2 className='text-xl mt-4'>Photos</h2>
                        <div className='flex gap-2'>
                            <input type="text" value={photoLink} onChange={ev => setPhotoLink(ev.target.value)} placeholder='Add using a link...' />
                            <button className='bg-gray-200 px-4 rounded-2xl'>Add&nbsp;Photo</button>
                        </div>
                        <div className="mt-2 grid grid-col-3 md:grid-cols-4 lg:grid-cols-6">
                            <button className='flex justify-center gap-1 border bg-transparent rounded-2xl p-4 text-gray-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                Upload
                            </button>
                        </div>
                        <h2 className='text-xl mt-4'>Description</h2>
                        <textarea value={Description} onChange={ev => setDescription(ev.target.value)} />
                        <h2 className='text-xl mt-4'>Perks</h2>
                        <div className='grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                            <Perks selected={perks} onChange={setPerks}/>
                        </div>
                        <h2 className='text-xl mt-4'>Extra Info</h2>
                        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
                        <h2 className='text-xl mt-4'>Check In & Out, max guests</h2>
                        <div className='grid gap-2 sm:grid-cols-3'>
                            <div>
                                <label className='mt-1 mb-1'>Check In</label>
                                <input type="text" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} placeholder='14' />
                            </div>
                            <div>
                                <label className='mt-1 mb-1'>Check Out</label>
                                <input type="text" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} placeholder='21' />
                            </div>
                            <div>
                                <label className='mt-1 mb-1'>Max Guests</label>
                                <input type="number" value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} placeholder='1' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <button className="primary">Save</button>
                        </div>
                    </form>
                </div>
            )}
        </React.Fragment>
    )
}

export default PlacesPage