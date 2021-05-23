import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'


function Navbar() {
    return (
        <div className='fixed border shadow w-screen bg-white'>
            <div className='flex justify-end items-center'>

                <div className='mr-auto text-white bg-yellow-500 px-9 py-2 
                transition duration-500 ease-in-out hover:bg-red-900 '>
                    <AiOutlineHome size={53} />
                </div>

                <h1 className='px-10 mx-3 text-gray-400 transition duration-500 ease-in-out hover:bg-gray-100 cursor-pointer'>
                    New Post
                </h1>

                <h1 className='px-10 mx-3 text-gray-400 transition duration-500 ease-in-out hover:bg-gray-100 cursor-pointer '>
                    Sign Up
                </h1>
                <h1 className='px-10 mx-10 text-blue-300 border-2 rounded-lg  border-blue-300
                        transition duration-500 ease-in-out hover:bg-blue-600
                        hover:text-white
                        cursor-pointer'>
                            Login
                </h1>
            </div>
        </div>
    )
}

export default Navbar
