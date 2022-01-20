import NavBar from './components/NavBar';
import Feed from './components/Feed'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { Route, Routes} from 'react-router';
import {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginUser = () =>setIsLoggedIn(!isLoggedIn)
  
  useEffect(() => {
    if(localStorage.getItem('id')) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={isLoggedIn ? <Dashboard /> : <Login logFunction={loginUser}/>} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
