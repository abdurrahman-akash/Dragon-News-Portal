import React from 'react';
import userPhoto from '../../assets/user.png';

const ShowProfile = ({ user, handleEditToggle, handleLogout, handleBackToHome }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-md mx-auto">
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <img 
            src={user?.photoURL || userPhoto} 
            alt={user?.displayName || 'User'} 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-primary object-cover"
            onError={(e) => {
              e.target.src = userPhoto;
            }}
          />
          <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </div>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          {user?.displayName || 'Anonymous User'}
        </h3>
        <p className="text-gray-600 mb-6">{user?.email}</p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Account Type:</span>
              <span className="text-gray-600">
                {user?.providerData?.[0]?.providerId === 'google.com' ? 'Google' : 'Email'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Member Since:</span>
              <span className="text-gray-600">
                {user?.metadata?.creationTime ? 
                  new Date(user.metadata.creationTime).toLocaleDateString() : 
                  'Unknown'
                }
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Last Sign In:</span>
              <span className="text-gray-600">
                {user?.metadata?.lastSignInTime ? 
                  new Date(user.metadata.lastSignInTime).toLocaleDateString() : 
                  'Unknown'
                }
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={handleEditToggle}
            className="btn btn-primary w-full"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
            Edit Profile
          </button>
          
          <div className="flex gap-3">
            <button
              onClick={handleBackToHome}
              className="btn btn-outline flex-1"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
              </svg>
              Back to Home
            </button>
            
            <button
              onClick={handleLogout}
              className="btn btn-error flex-1"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;