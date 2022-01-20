import NavBar from './components/NavBar';
import Feed from './components/Feed'
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
     <Register />
     <NavBar />
     
     <Feed />
    </div>
  );
}

export default App;
