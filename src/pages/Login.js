import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate, useHistory } from 'react-router-dom';
import { useHistory, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

// export const MyUser = createContext(false);

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const getUserName = (e) => {
        setUserName(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/dashboard')
        }
    }, [navigate])
    const handleLogin = (event) => {
        event.preventDefault()
        const item = { userName, password }
        localStorage.setItem("user-info", JSON.stringify(item))
        navigate('/dashboard')
        console.log(item)
        // if (userName === 'admin' && password === 'user') {
        //     navigate(from, { replace: true });
        // }
    }
    return (
        < >
            <Navbar></Navbar>
            <div className=" min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
                    <div className="mt-10">
                        <form >
                            <div className="flex flex-col mb-6">
                                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">User-Name:</label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>

                                    </div>

                                    <input onBlur={getUserName} id="username" type="text" name="email" className="text-sm sm:text-base placeholder-gray-500  pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter Username" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <span>
                                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                    </div>

                                    <input onBlur={getPassword} id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter Password" />
                                </div>
                            </div>

                            <div className="flex w-full">
                                <button onClick={handleLogin} type="submit" value='login' className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                    <span className="mr-2 uppercase">Login</span>
                                    <span>
                                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;