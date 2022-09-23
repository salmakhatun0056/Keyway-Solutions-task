import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile mt-16 bg-accent">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-4xl font-bold text-white'>Welcome to Keyway Solutions dashboard</h1>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;