import React from 'react';
import Feed from './Feed'
import {Route, Routes} from 'react-router'
function Dashboard() {
  return <div>
      <Routes>
          <Route path='/home' element={<Feed />} />    
      </Routes>
          
  </div>;
}

export default Dashboard;
