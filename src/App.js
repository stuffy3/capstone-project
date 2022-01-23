import NavBar from './components/NavBar';
import Feed from './components/Feed'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CreatePostPage from './components/CreatePostPage';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
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
          <Route exact path="/create-post" element={<CreatePostPage />} />
      </Routes>
    </div>
  );
}

export default App;
