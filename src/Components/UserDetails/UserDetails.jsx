import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData();
    const{username,name}=user;
    return (
        <div>
            <h3>User Details here</h3>
            <h5>Name:{name}</h5>
            <p>Username:{username}</p>
        </div>
    );
};

export default UserDetails;