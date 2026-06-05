import React, { Suspense, useState } from 'react';
import { Link, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';
import { Navigate } from 'react-router';

const User = ({user}) => {
    const[showInfo,setShowInfo]=useState(false);
    const[visitHome,setvisitHome]=useState(false);
    const location=useLocation();
    const {id,name,email,phone}=user;

    const userPromise=fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());

    const userStyle={
        border:'2px solid yellow',
        borderRadius:'20px',
        padding:'10px',
        Margin:'10px'
    }

    if(visitHome){
        return <Navigate to='/'></Navigate>
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p><small>{phone}</small></p>
            <p><small>{email}</small></p>
            <Link to={`/Users2/${id}`}>Show Details</Link>
            <button onClick={()=>setShowInfo(!showInfo)}>{showInfo?'Hide':'Show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={()=>setvisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;