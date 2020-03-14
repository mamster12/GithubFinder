import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className='grid-3'>
                {users.map(user => (
                    <UserItem key={user.login} user={user} />
                ))}
            </div>
        )
    }
}

// !!! inline not recommended!
// const userStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '1rem'
// }


export default Users;
