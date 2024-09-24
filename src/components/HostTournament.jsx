// HostTournament.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const HostTournament = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tournamentName: '',
    date: '',
    location: '',
    format: '',
    teams: '',
    contactPerson: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to your API
    console.log('Form submitted:', formData);
    // Redirect or show success message
  };

  return (
    <div className='bg-gray-900'>
    <Navbar />
    <div className="max-w-md mx-auto my-8 p-6 bg-gradient-to-b from-black to-blue-900 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl mb-4">Host a Tournament</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label className="block mb-2">Tournament Name:</label>
            <input
              type="text"
              name="tournamentName"
              value={formData.tournamentName}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700"
              required
            />
            <label className="block mb-2">From:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700"
              required
            />
            <label className="block mb-2">To:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700"
              required
            />
            <label className="block mb-2">Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700"
              required
            />
            <button type="button" onClick={handleNext} className="mt-4 p-2 bg-blue-600 rounded-md">Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block mb-2">Format:</label>
            <input
              type="text"
              name="format"
              value={formData.format}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700"
              required
            />
            <label className="block mb-2">Number of Teams:</label>
            <input
              type="number"
              name="teams"
              value={formData.teams}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700"
              required
            />
            <div className='flex space-x-2'>
            <button type="button" onClick={() => setStep(1)} className="mt-4 p-2 bg-gray-600 rounded-md">Back</button>
            <button type="button" onClick={handleNext} className="mt-4 p-2 bg-blue-600 rounded-md">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="block mb-2">Contact Person:</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700"
              required
            />
            <label className="block mb-2">Contact Number:</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700"
              required
            />
            <div className='flex space-x-2'>
            <button type="button" onClick={() => setStep(2)} className="mt-4 p-2 bg-gray-600 rounded-md">Back</button>
            <button type="submit" className="mt-4 p-2 bg-green-600 rounded-md">Submit</button>
            </div>
          </div>
        )}
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default HostTournament;
