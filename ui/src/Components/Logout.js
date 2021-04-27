/* eslint-disable import/no-duplicates */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

const Logout = () => {
const user = useSelector(selectUser)
const dispatch = useDispatch();
const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout())
}


    return (
        <div>
            <h1>Welcome <span className="user_name">{user.name}</span>
            </h1>
            <button className="logout_button" onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout
