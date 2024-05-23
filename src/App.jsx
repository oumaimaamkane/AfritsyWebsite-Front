import React from 'react';
import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Check if the user is logged 
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
      setEmail(localStorage.getItem('email'));
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLoggedIn}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} setEmail={setEmail} /> : <Navigate to="/" />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard email={email} setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
