import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const SignIn = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Updated hook for navigation

  const handleUserTypeSelect = (e) => {
    setUserType(e.target.value);
    setStep(2);
  };

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (userType === 'Audience' && credentials.username === '123' && credentials.password === 'password') {
      setStep(3);
    } else if (userType === 'Player' && credentials.username === '100123' && credentials.password === 'password') {
      setStep(3);
    } else {
      setError('Invalid credentials');
    }
  };

  const handleRedirect = () => {
    navigate('/'); // Updated for redirection
  };

  return (
    <div className='bg-gray-900'>
        <Navbar />
    <div className=" flex-grow max-w-md mx-auto p-6 bg-gradient-to-b from-black to-blue-900 rounded-lg shadow-md mt-12"> {/* Form Container */}
      {step === 1 && (
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-center">Sign In</h2>
          <div className="mb-4">
            
            <select
              className="w-full p-3 bg-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" // Dropdown styling
              onChange={handleUserTypeSelect}
              value={userType}
            >
              <option value="" disabled>Select User Type</option>
              <option value="Audience">Audience</option>
              <option value="Player">Player</option>
            </select>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Sign In as {userType}</h2>
          <div className="space-y-6">
            {userType === 'Audience' ? (
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username or Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" // Input styling
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Player ID or Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" // Input styling
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" // Input styling
                onChange={handleInputChange}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Login Successful!</h2>
          <button
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={handleRedirect}
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
    <Footer className="fixed bottom-0 left-0 w-full h-24" />
    </div>
  );
};

export default SignIn;
