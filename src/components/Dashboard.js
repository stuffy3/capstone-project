import React from 'react';
import Feed from './Feed'
import {Route, Routes} from 'react-router'
import CreatePostPage from './CreatePostPage';

function Dashboard() {
  return <div>
      <Feed />
  </div>;
}

export default Dashboard;
