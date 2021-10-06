import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Poperty = () => {
     const [posts, setPosts] = useState([]);
    

     useEffect(() =>{
            fetch('./facHeder.json')
            .then(res => res.json())
            .then(data => setPosts(data))
        },[])
    return (
        <div>
         {
            posts.map(post => <Post
                key={posts.id}
                post={post}></Post>)        }
          
        </div>
    );
};

export default Poperty;