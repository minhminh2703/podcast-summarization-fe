import { Route, BrowserRouter as Router, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from './features/auth/auth';  // Login page
import HomeSearch from './features/home-search/home-search';  // Home page

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []); 

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}/>
          <Route path="/auth" element={<Auth />} />

          <Route path="/home" element={isAuthenticated ? <HomeSearch /> : <Navigate to="/auth" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
