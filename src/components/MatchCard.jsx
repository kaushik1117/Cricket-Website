import React from 'react';
import { Link } from 'react-router-dom';


const MatchCard = ({ status, teamA, teamB, overview, id}) => {
  // Determine header color based on status
  const headerColor =
    status === 'Ongoing' ? 'text-green-500' : 
    status === 'Ended' ? 'text-red-500' : 
    'text-blue-500'; // For Upcoming

  return (
    <div className="relative flex flex-col my-6 bg-slate-900 shadow-lg border border-slate-200 rounded-lg overflow-hidden"> {/* Added overflow-hidden */}
      <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
        <span className={`text-sm font-medium ${headerColor}`}>
          {status === 'Ongoing' ? 'Live Match' : status === 'Ended' ? 'Match Ended' : 'Upcoming Match'}
        </span>
      </div>

      <div className="p-4 flex-1"> {/* Flex grow to occupy available space */}
        <h5 className="mb-2 text-white text-lg sm:text-xl font-semibold"> {/* Responsive font size */}
          {teamA} vs {teamB}
        </h5>
        <p className="text-white leading-normal font-light">
          {overview}
        </p>
      </div>

      <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1 h-16"> {/* Fixed height for the footer */}
        
        <Link to="/matches" className="hover:text-gray-300 text-white">View Scorecard</Link>
      </div>
    </div>
  );
};

export default MatchCard;
