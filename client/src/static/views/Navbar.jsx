import React, {  } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../styles/App.css'

const Navbar = () => {
    const handleClick = () => {
        const section = document.querySelector('#about');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return (
        <div className="d-flex col align-items-center justify-content-between px-5 nav-bar bg-white bg-opacity-50 blur fade-in-2">
            <img src={logo} alt="logo" style={{ height: "50px" }} className="App-logo" />
            <div className='col-5'>
                <div className="d-flex col">
                    <Link onClick={() => handleClick} className='text-decoration-none txtHover col-3 rounded mx-1'>About</Link>
                    <Link className='text-decoration-none txtHover col-3 rounded mx-1'>Skills</Link>
                    <Link className='text-decoration-none txtHover col-3 rounded mx-1'>Projects</Link>
                    <Link className='text-decoration-none txtHover col-3 rounded mx-1'>Connect</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar