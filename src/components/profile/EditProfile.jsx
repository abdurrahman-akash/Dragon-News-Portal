import React from 'react';
import userPhoto from '../../assets/user.png';

const EditProfile = ({ 
  formData, 
  handleInputChange, 
  handleUpdateProfile, 
  handleEditToggle, 
  isUpdating,
  handleLogout,
  handleBackToHome
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-md mx-auto">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
        Edit Profile
      </h3>
      
      <form onSubmit={handleUpdateProfile} className="space-y-6">
        {/* Profile Picture Preview */}
        <div className="text-center mb-6">
          <img 
            src={formData.photoURL || userPhoto} 
            alt="Profile Preview" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-primary object-cover mx-auto"
            onError={(e) => {
              e.target.src = userPhoto;
            }}
          />
        </div>

        {/* Display Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Display Name
          </label>
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter your display name"
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photo URL
          </label>
          <input
            type="url"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter photo URL"
          />
        </div>

        {/* Password Section */}
        <div className="border-t pt-6">
          <h4 className="font-medium text-gray-800 mb-4">Change Password (Optional)</h4>
          
          {/* Current Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              placeholder="Enter current password"
            />
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              placeholder="Enter new password (min 6 characters)"
              minLength={6}
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              placeholder="Confirm new password"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleEditToggle}
              className="btn btn-outline flex-1"
              disabled={isUpdating}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary flex-1"
              disabled={isUpdating}
            >
              {isUpdating ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Updating...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
          
          {/* Additional Navigation Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleBackToHome}
              className="btn btn-outline btn-sm flex-1"
              disabled={isUpdating}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
              </svg>
              Back to Home
            </button>
            
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-error btn-sm flex-1"
              disabled={isUpdating}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;