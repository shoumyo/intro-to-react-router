import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({usersPromise}) => {
    const users=use(usersPromise);
    return (
        <div>
            <h3>This is User 2</h3>
            <div>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;