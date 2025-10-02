import React from 'react';

const NoUser = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">No User Found</h2>
        <p className="text-gray-600 mb-6">Please log in to view your profile.</p>
        <button
          onClick={() => window.location.href = '/auth/login'}
          className="btn btn-primary"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default NoUser;