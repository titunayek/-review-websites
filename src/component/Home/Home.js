import React from 'react';
import Poperty from '../Poperty/Poperty';
import './Home.css'


const Home = () => {
    return (
        <div>
            <h2 className='text-ht'>Online All Courses Taineing Center</h2>
           
           <div className='poperty'>
             <Poperty></Poperty>
           </div>
        </div>
    );
};

export default Home;