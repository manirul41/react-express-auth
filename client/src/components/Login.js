import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // reset errors
    setEmailError('');
    setPasswordError('');

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      console.log(data);
      if (data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);
      }
      if (data.user) {
        localStorage.setItem('user', data.user);
        navigate('/');
        //return <navigate to="/all" replace />;
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }

    console.log(email, password);
  };

  return (
    <div className="mx-16 flex flex-col justify-center items-center h-screen space-y-2">
      <div className="flex-grow-0 p-10 border filter drop-shadow-sm">
        <p className="text-2xl text-center">Log In</p>
        <form action="#" onSubmit={handleSubmit}>
          <div className="space-y-2 pb-2">
            <label className="block">Email:</label>
            <input
              className="block"
              type="text"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-sm text-red-600">{emailError}</p>
          </div>
          <div className="space-y-2 pb-2">
            <label className="block">Password:</label>
            <input
              className="block"
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-sm text-red-600">{passwordError}</p>
          </div>
          <input type="submit" value="Log In" className="p-2 w-full bg-blue-600 text-white" />
        </form>
        <p className="text-sm text-justify">
          Don&apos;t have an Account?{' '}
          <Link to="/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
