// Scorecard.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Scorecard1 = () => {
  return (
    <div>
    <Navbar />
    <div className="max-w-4xl mx-auto bg-gradient-to-b from-black to-blue-900 text-white p-7 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Detailed Scorecard: Team A vs Team B</h2>
      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Team A Innings</h3>
        <p>Runs: 156/3 (20 overs)</p>
        <p>Top Scorer: Player X - 70(45)</p>
        <p>Bowler Y: 4-0-25-2</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Team B Innings</h3>
        <p>Runs: 158/4 (18.2 overs)</p>
        <p>Top Scorer: Player Z - 60(39)</p>
        <p>Bowler A: 4-0-30-1</p>
      </div>

      <div>
        <p className="font-semibold">Result: Team B won by 6 wickets</p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Scorecard1;
