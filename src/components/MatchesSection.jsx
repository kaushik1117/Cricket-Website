import React from 'react';
import MatchCard from './MatchCard';

const MatchesSection = () => {
  return (
    <section id="matches" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Matches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MatchCard 
            status="Ended" 
            teamA="Team A" 
            teamB="Team B" 
            overview="Team A - 156/3 (20 overs). Team B - 158/4 (18.2 overs). Team B won." 
            id="1"
          />
          <MatchCard 
            status="Ongoing" 
            teamA="Team C" 
            teamB="Team D" 
            overview="Toss - Team C chose to bowl. Team D - 66/1 (8.2 overs). Team C - Yet to bat." 
            id="2"
          />
          <MatchCard 
            status="Upcoming" 
            teamA="Team E" 
            teamB="Team F" 
            overview="Tomorrow at 10:00 AM" 
            id="3"
          />
          <MatchCard 
            status="Upcoming" 
            teamA="Team G" 
            teamB="Team H" 
            overview="Starts in 4 hours" 
            id="4"
          />
        </div>
      </div>
    </section>
  );
};

export default MatchesSection;
