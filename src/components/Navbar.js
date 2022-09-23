import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomLink from './CustomLink';

const Navbar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const logout = () => {
        localStorage.clear();
        navigate('/login')

    }
    return (
        <div className="navbar bg-black lg:px-16 px-0 fixed top-0 z-20">
            <div className="navbar-start">
                <div className="dropdown">

                    <label tabIndex="0" className="btn btn-ghost lg:hidden -">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <CustomLink to='/dashboard'>Dashboard</CustomLink>
                                </> :
                                <>
                                    <CustomLink to='/login'>Login</CustomLink>
                                </>
                        }

                        <CustomLink to='/guest'>Guest</CustomLink>
                        <CustomLink to='/'>Home</CustomLink>

                        {
                            localStorage.getItem('user-info') ?
                                <li onClick={logout} className=' text-xl ml-2 cursor-pointer text-white'>Logout</li> : null
                        }

                    </ul>
                </div>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/guest'>Guest</CustomLink>
                {pathname.includes('dashboard') &&
                    <label htmlFor="my-drawer-2" tabIndex="0" className="btn btn-ghost ml-32 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                }
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                            </> :
                            <>
                                <CustomLink to='/login'>Login</CustomLink>
                            </>
                    }
                    {
                        localStorage.getItem('user-info') ?
                            <li onClick={logout} className=' text-xl cursor-pointer text-white'>Logout</li> : null
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;