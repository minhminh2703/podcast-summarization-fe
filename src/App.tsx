import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from './features/auth';
import MainLayout from './components/layouts/main-layout';
import PodcastSummarize from './features/podcast-summarize';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      const tokenExpiration = localStorage.getItem('token_expiration'); 
      const currentTime = new Date().getTime();

      if (tokenExpiration && currentTime > parseInt(tokenExpiration)) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_expiration');
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true); 
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Router>
      <Routes>
        {/* Default path */}
        <Route path="/" element={<Navigate to={isAuthenticated ? "/summarize" : "/auth"} />} />

        {/* Auth page */}
        <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected routes */}
        <Route path="/" element={isAuthenticated ? <MainLayout /> : <Navigate to="/auth" />}>
          <Route path='summarize' element={<PodcastSummarize />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
