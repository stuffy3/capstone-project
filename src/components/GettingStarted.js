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
            <div>
              <h1>Create</h1>
              <img src="./Create-Icon.png" alt="create-book" style={{height: 110, width: 140}}/>
              <div className="gettingStartedTopicsDescription">
                <h3 style={{textAlign: "center"}}>Head to <Link to="/create-post" style={{}}>Create an Entry</Link></h3>
                <h3>Upload a .jpg image of your chart</h3>
                <h3>Add important data for tracking</h3>
                <h3>Finish up by clicking "Create Entry"</h3>
              </div>
            </div>
            <div>
              <h1>Study</h1>
              <img src="./Study-Icon.png" alt="study-book" style={{height: 110, width: 140}}/>
              <div className="gettingStartedTopicsDescription">
              <h3>Entries are updated on the <Link to="/home">Home</Link> page</h3>
              </div>
            </div>
            <div>
              <h1>Track</h1>
              <img src="./Track-Icon.png" alt="track-book" style={{height: 110, width: 140}}/>
            </div>
          </div>
      </div>
  </div>;
}
