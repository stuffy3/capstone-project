import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './GettingStarted.css'

export default function GettingStarted() {
  return <div className="gettingStartedMainBackground">
      <NavBar />
      <div >
          <div className='gettingStartedMainHeader'>
            <h1>Getting Started with Create An Edge</h1>
          </div>
          <div className="gettingStartedTopics">
            <div className="gettingStartedTopicsColumns">
              <h1>Create</h1>
              <img src="./Create-Icon.png" alt="create-book" style={{height: 90, width: 110}}/>
                <h3 style={{textAlign: "center"}}>Entries are created on the <Link to="/create-post" style={{}}>Create an Entry</Link> page</h3>
              <div className="gettingStartedTopicsDescription">
                <p>Upload a .jpg image of your chart,
                fill out all of the important data for tracking
                your trades, then finish up our entry by clicking, "Create Entry."</p>
              </div>
            </div>
            <div className="gettingStartedTopicsColumns">
              <h1>Study</h1>
              <img src="./Study-Icon.png" alt="study-book" style={{height: 90, width: 110}}/>
              <h3>Entries are updated on the <Link to="/home">Home</Link> page</h3>
              <div className="gettingStartedTopicsDescription">
                <p>Have access to all current and previous posts
                  presented to you in an easy to read format.
                  Giving you the ability to stgit udy and learn from your previous trades and investments.
                </p>
              </div>
            </div>
            <div className="gettingStartedTopicsColumns">
              <h1>Track</h1>
              <img src="./Track-Icon.png" alt="track-book" style={{height: 90, width: 110}}/>
              <h3>Progress is tracked on the <Link to="/profile">Profile</Link> page</h3>
              <div className="gettingStartedTopicsDescription">
              <p>All your statistics that are gathered from your posts are displayed on this page
              for you to track your trading or investing progression.</p>
              </div>
            </div>
          </div>
      </div>
  </div>;
}
