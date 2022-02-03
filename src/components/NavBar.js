import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className='navContainer'>
            <nav className='navigation'>
                <div className='navBarInner'>
                    <div className='navBarItems'>
                        <Link style={{textDecoration: "none", color: "white"}} to='./home'>Creating An Edge</Link>
                    </div>
                    <div className='anchorPointRight'>
                        <Link to='/home'>Home</Link>
                        <Link to='/getting-started'>Getting Started</Link>
                        <Link to='/create-post'>Create an Entry</Link>
                        <Link to='/profile'>Profile</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
