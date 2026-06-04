import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users=use(usersPromise);
    return (
        <div>
            <h3>This is User 2</h3>
        </div>
    );
};

export default Users2;