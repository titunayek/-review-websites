import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Detels.css'

const FriendDetels = () => {
   
    const [friend, setFriend] = useState({})
    const history = useHistory()
    useEffect( ()=>{
        fetch ('./facHeder')
        .then(res => res.json())
        .then(data => setFriend(data))
    } ,[] )
    const handleClick = () =>{
            history.push('/friends')
    }
    return (
        <div>
            
            <h1>{friend.Role} </h1>
            <img  src={friend.img} alt="" />
            <h3 className='text-color'>This is an online course, the duration of our course is 3 months. Anyone can do this course.  This course is just for beginners so anyone can start.</h3>
            
            <button className='btn-b' onClick={handleClick}>clickButton</button>
          

            
        </div>
    );
};

export default FriendDetels;