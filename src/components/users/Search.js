import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please Enter something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} action="form">
                <input type="text" name="text" placeholder="Search Users.." value={text} onChange={onChange} />
                <input type="submit" value="SEARCH" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && (
                <button className="btn btn-danger btn-block" onClick={githubContext.clearUsers}>CLEAR</button>
            )}
        </div>
    );
}


export default Search;
