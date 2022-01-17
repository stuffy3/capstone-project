import React from 'react'
import './NavBar.css'

export default function NavBar() {
    return (
        <div>
            <nav className='navigation'>
                <div className='navigationContainer'>
                    <div className='logoDisplay'>
                        <strong>Trading Dives</strong>
                        <div className='anchorPoint'>
                            <a href='/'>Getting Started</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
