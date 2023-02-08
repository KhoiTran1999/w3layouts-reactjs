import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <h1><i className='fab fa-asymmetrik'></i>UI Portfolio</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li className='dropDown'>
                        Blog
                        <i className="fa-solid fa-angle-down"></i>
                        <ul>
                                <li>Blog - No Sidebar</li>
                                <li>Blog - Right Sidebar</li>
                                <li>Blog - Left Sidebar</li>
                                <li>Blog Single - No Sidebar</li>
                                <li>Blog Single - Right Sidebar</li>
                                <li>Blog Single - Left Sidebar</li>
                        </ul>
                    </li>
                    <li className='dropDown'>
                        Pages
                        <i className="fa-solid fa-angle-down"></i>
                        <ul>
                                <li>404 Page</li>
                                <li>Email Template</li>
                                <li>Landing Page</li>
                                <li>Shortcodes</li>
                        </ul>
                    </li>
                    <li>Contact</li>
                    <button>Hire Me</button>
                </ul>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-regular fa-moon"></i>
            </div>
        </div>
    </header>
  )
}

export default Header;