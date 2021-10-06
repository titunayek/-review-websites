import React , {useEffect, useState} from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'


const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect( () =>{
        fetch ('./fackdata.json')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h2 className='text-color'>I Have Learing Team</h2>
           <div className ='friend-contain'>
                 {
                    friends.map( friend => <Friend
                        key={friend.id}
                        friend={friend}
                        ></Friend>)
                }
           </div>
        </div>
    );
};

export default Friends;