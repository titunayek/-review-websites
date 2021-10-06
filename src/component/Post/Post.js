import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = (props) => {
    const {img, Role,id }=props.post;

    return (
        <div className='post-countain'>
            <div>
                <img  className='img' src={img} alt="" />
                <h3 className='text'>{Role}</h3>
                    
               
            </div>
        </div>
    );
};

export default Post;