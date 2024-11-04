// auth/App.jsx

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Preferences from './components/Preferences'; 
import Login from './components/Login';  // Import Login component
import { useState } from 'react';
import Dashboard from './components/dashboard';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <h2>APP</h2>

      <BrowserRouter>
        <nav style={{ margin: '10px' }}>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
              <Link to="/preferences">Preferences</Link>
              <button onClick={handleLogout}>Logout</button> {/* Logout button */}
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />  {/* Pass handleLogin to Login */}
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard/> : <Login onLogin={handleLogin} />} />  
          <Route path="/preferences" element={isAuthenticated ? <Preferences /> : <Login onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
