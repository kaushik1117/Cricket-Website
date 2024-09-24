import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Navbar from './Navbar';
import Footer from './Footer';

const MultiStageForm = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    address1: '',
    address2: '',
    userType: '',
    playerType: '',
    coaching: '',
    achievements: '',
    teamPreference: '',
  });
  const [success, setSuccess] = useState(false); // For displaying success message

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission logic
    console.log('Form Data Submitted:', formData);
    setSuccess(true); // Show success message
    setTimeout(() => {
      navigate('/'); // Redirect to home page after 2 seconds
    }, 2000);
  };

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames="fade"
    >
        <div>
    <Navbar />
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="w-full max-w-lg bg-gradient-to-b from-black to-blue-900 p-8 rounded-lg shadow-lg">
        {success ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
            <p className="text-lg">Thank you for registering! Redirecting to home...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4 pt-6">
                <h2 className="text-xl font-bold">Personal Details</h2>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="address1"
                  placeholder="Address Line 1"
                  value={formData.address1}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="address2"
                  placeholder="Address Line 2"
                  value={formData.address2}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleNext}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-2 pt-6">
                <h2 className="text-xl font-bold">User Type</h2>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select User Type</option>
                  <option value="Audience">Audience</option>
                  <option value="Player">Player</option>
                </select>

                {formData.userType === 'Player' && (
                  
                  <button
                    type="button"
                    onClick={handleNext}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                  >
                    Next
                  </button>
                  
                )}

                {formData.userType === 'Audience' && (
                  
                  <button
                    type="submit"
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                  >
                    Submit
                  </button>
                )}
                
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="mt-4 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                >
                  Previous
                </button>
                
              </div>
            )}

            {step === 3 && formData.userType === 'Player' && (
              <div className="space-y-4 pt-6">
                <h2 className="text-xl font-bold">Player Details</h2>
                <select
                  name="playerType"
                  value={formData.playerType}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Player Type</option>
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler">Bowler</option>
                  <option value="All Rounder">All Rounder</option>
                </select>

                <select
                  name="coaching"
                  value={formData.coaching}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Past/Present Coaching</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

                <input
                  type="text"
                  name="achievements"
                  placeholder="Achievements (optional)"
                  value={formData.achievements}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                />

                <select
                  name="teamPreference"
                  value={formData.teamPreference}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Team Preference</option>
                  <option value="Team 1">Team 1</option>
                  <option value="Team 2">Team 2</option>
                  <option value="Team 3">Team 3</option>
                  <option value="Team 4">Team 4</option>
                  <option value="Team 5">Team 5</option>
                  <option value="Team 6">Team 6</option>
                </select>
                
                <button
                  type="submit"
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={handlePrevious}
                  className="mt-4 ml-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                >
                  Previous
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
    <Footer />
    </div>

    </CSSTransition>
  );
};

export default MultiStageForm;
