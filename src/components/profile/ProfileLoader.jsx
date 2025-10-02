import React from 'react';

const ProfileLoader = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-4 text-gray-600">Loading profile...</p>
      </div>
    </div>
  );
};

export default ProfileLoader;