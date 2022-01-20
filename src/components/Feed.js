import React, { Component } from 'react'
// import Posts from './components/Posts'
import './Feed.css'
import NavBar from './NavBar'

export default class Feed extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="mainFeedContainer">
                    <div className='mainFeedInner'>
                        
                    </div>
                </div>
            </div>
        )
    }
}
