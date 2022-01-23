import React from 'react'
import {Routes, Route} from 'react-router'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className='navContainer'>
            <nav className='navigation'>
                <div className='navBarInner'>
                    <div className='navBarItems'>
                        The Trading Eye
                    </div>
                    <div className='anchorPointRight'>
                        <a href='/home'>Home</a>
                        <a href='/instructions'>Getting Started</a>
                        <a href='/create-post'>Create Entry</a>
                        <a href='/profile'>Profile</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
