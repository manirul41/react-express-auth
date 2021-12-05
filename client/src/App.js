import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import ProtectedRoute from './ProtectedRoute';
import RedirectedRoute from './RedirectedRoute';

function App() {
  // Check If User is Logged In
  const [auth, setauth] = useState(false);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('http://localhost:5000/auth', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 200) {
        setauth(true);
      }
      if (res.status === 401) {
        setauth(false);
      }
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div className="">
      <Header auth={auth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute auth={auth} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route element={<RedirectedRoute auth={auth} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
