// MatchCard.jsx
import React from 'react';

const MatchCard = ({ status, teamA, teamB, overview }) => {
  // Determine header color based on status
  const headerColor =
    status === 'Ongoing' ? 'text-green-500' : 
    status === 'Ended' ? 'text-red-500' : 
    'text-blue-500'; // For Upcoming

  return (
    <div className="relative flex flex-col my-6 bg-gradient-to-r from-black from-50% via-blue-900 to-black shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
        <span className={`text-sm font-medium ${headerColor}`}>
          {status === 'Ongoing' ? 'Live Match' : status === 'Ended' ? 'Match Ended' : 'Upcoming Match'}
        </span>
      </div>

      <div className="p-4 flex-1"> {/* Flex grow to occupy available space */}
        <h5 className="mb-2 text-white text-xl font-semibold">
          {teamA} vs {teamB}
        </h5>
        <p className="text-white leading-normal font-light">
          {overview}
        </p>
      </div>

      <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1 h-16"> {/* Fixed height for the footer */}
        <span className="text-sm text-white font-medium">
          Last updated: {new Date().toLocaleTimeString()} {/* Example timestamp */}
        </span>
      </div>
    </div>
  );
};

export default MatchCard;
