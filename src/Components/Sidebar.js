import React from 'react'
import {MdExplore} from 'react-icons/md'
import {FaPlay} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {FaWrench} from 'react-icons/fa'
import {FaStream} from 'react-icons/fa'
import {FaRulerCombined} from 'react-icons/fa'
import {FaTshirt} from 'react-icons/fa'

function Sidebar() {
    return (
        <div>
            <div className='fixed border shadow mt-20 h-screen bg-gray-700 w-32'>
                <div>
                    <div className='py-5 grid justify-items-center text-gray-400
                    transition duration-500 ease-in-out hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110
                    cursor-pointer'>
                    <MdExplore size={40} color={'gray'}/><h1>Explore</h1>
                    </div>

                    <div className='py-5 grid justify-items-center text-gray-400
                    transition duration-500 ease-in-out hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110
                    cursor-pointer'>
                        <FaPlay size={35} color={'gray'}/><h1>Videos</h1>
                    </div>

                    <div className='py-5 grid justify-items-center text-gray-400
                    transition duration-500 ease-in-out hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110
                    cursor-pointer'>
                        <FaUserGraduate size={40} color={'gray'}/><h1>Courses</h1>
                    </div>

                    <div className='py-5 grid justify-items-center text-gray-400
                    transition duration-500 ease-in-out hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110
                    cursor-pointer'>
                        <FaWrench size={40} color={'gray'}/><h1>Tools</h1>
                    </div>

                    <div className='py-5 grid justify-items-center text-gray-400
                    transition duration-500 ease-in-out hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110
                    cursor-pointer'>
                        <FaStream size={40} color={'gray'}/><h1>Topics</h1>
                    </div>

                    <div className='py-5 grid justify-items-center text-gray-400
                    transition duration-500 ease-in-out hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110
                    cursor-pointer'>
                        <FaRulerCombined size={40} color={'gray'}/><h1>Templates</h1>
                    </div>

                    <div className='py-5 grid justify-items-center text-gray-400
                    transition duration-500 ease-in-out hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110
                    cursor-pointer'>
                        <FaTshirt size={40} color={'gray'}/><h1>T-Shirts</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
