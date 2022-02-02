
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CreatePostPage from './components/CreatePostPage';
import {Route, Routes} from 'react-router-dom';
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
          <Route exact path='/register' element={<Register />} />
          <Route exact path="/create-post" element={<CreatePostPage />} />
      </Routes>
    </div>
  );
}

export default App;
