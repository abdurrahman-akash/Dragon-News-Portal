import React from 'react';
import { useProfile } from '../hooks/useProfile.js';
import { 
  ProfileHeader, 
  ShowProfile, 
  EditProfile, 
  ProfileLoader, 
  NoUser 
} from '../components';

const Profile = () => {
  const {
    user,
    loading,
    isEditing,
    isUpdating,
    formData,
    handleInputChange,
    handleEditToggle,
    handleUpdateProfile,
    handleLogout,
    handleBackToHome
  } = useProfile();

  // Main render
  if (loading) {
    return <ProfileLoader />;
  }

  if (!user) {
    return <NoUser />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <ProfileHeader />
      
      {isEditing ? (
        <EditProfile 
          formData={formData}
          handleInputChange={handleInputChange}
          handleUpdateProfile={handleUpdateProfile}
          handleEditToggle={handleEditToggle}
          isUpdating={isUpdating}
          handleLogout={handleLogout}
          handleBackToHome={handleBackToHome}
        />
      ) : (
        <ShowProfile 
          user={user}
          handleEditToggle={handleEditToggle}
          handleLogout={handleLogout}
          handleBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}

export default Profile

