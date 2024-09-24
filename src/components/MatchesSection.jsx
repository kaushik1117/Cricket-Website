// MatchesSection.jsx
import React from 'react';
import MatchCard from './MatchCard';

const MatchesSection = () => {
  return (
    <section id="matches" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Matches</h2>
        <div className="flex space-x-4">
          <MatchCard 
            status="Ended" 
            teamA="Team A" 
            teamB="Team B" 
            overview="Team A - 156/3 (20 overs). Team B - 158/4 (18.2 overs). Team B won." 
          />
          <MatchCard 
            status="Ongoing" 
            teamA="Team C" 
            teamB="Team D" 
            overview="Toss - Team C chose to bowl. Team D - 66/1 (8.2 overs). Team C - Yet to bat." 
          />
          <MatchCard 
            status="Upcoming" 
            teamA="Team E" 
            teamB="Team F" 
            overview="Tomorrow at 10:00 AM" 
          />
          <MatchCard 
            status="Upcoming" 
            teamA="Team G" 
            teamB="Team H" 
            overview="Starts in 4 hours" 
          />
        </div>
      </div>
    </section>
  );
};

export default MatchesSection;
