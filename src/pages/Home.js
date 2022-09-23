import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (<>
        <Navbar></Navbar>
        <div className='mt-32 flex justify-center '>
            <h1 className='text-3xl font-bold'>Welcome to Keyway Solutions Home Page</h1>
        </div>
    </>
    );
};

export default Home;