import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {

    const {name,id,email,img,Age,Country,Role} =props.friend;
   

    const FriendStyle={
        border: '3px solid',
        padding: '10px',
        borderRadius: '10px'
    }
    
    
    return (
        <div style={FriendStyle}>
                 <img className='img' src={img} alt="" />
                <h2>{name}</h2>
                <h3><span className='font-style'>{Role}</span></h3>
                <h5> Age: {Age}</h5>
                <h5>Country : {Country}</h5>
               
                
            
          <button className='btn'>
          <Link className='text-link'  to={`/friend/${id}`}>Deteals</Link>
          </button>
           
           
            
        </div>
    );
};

export default Friend;