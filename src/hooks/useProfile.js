import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext.jsx';
import { updateProfile, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

export const useProfile = () => {
  const { user, loading, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    photoURL: user?.photoURL || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Toggle edit mode
  const handleEditToggle = () => {
    if (isEditing) {
      // Reset form when canceling
      setFormData({
        displayName: user?.displayName || '',
        photoURL: user?.photoURL || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } else {
      // Initialize form with current user data
      setFormData(prev => ({
        ...prev,
        displayName: user?.displayName || '',
        photoURL: user?.photoURL || ''
      }));
    }
    setIsEditing(!isEditing);
  };

  // Handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('No user logged in');
      return;
    }

    // Password validation
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    if (formData.newPassword && formData.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }

    setIsUpdating(true);

    try {
      // Update profile information
      if (formData.displayName !== user.displayName || formData.photoURL !== user.photoURL) {
        await updateProfile(user, {
          displayName: formData.displayName,
          photoURL: formData.photoURL
        });
        toast.success('Profile updated successfully!');
      }

      // Update password if provided
      if (formData.newPassword && formData.currentPassword) {
        try {
          // Re-authenticate user
          const credential = EmailAuthProvider.credential(user.email, formData.currentPassword);
          await reauthenticateWithCredential(user, credential);
          
          // Update password
          await updatePassword(user, formData.newPassword);
          toast.success('Password updated successfully!');
        } catch (error) {
          if (error.code === 'auth/wrong-password') {
            toast.error('Current password is incorrect');
            return;
          } else {
            toast.error('Failed to update password');
            return;
          }
        }
      }

      // Reset form and exit edit mode
      setFormData({
        displayName: formData.displayName,
        photoURL: formData.photoURL,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setIsEditing(false);
      
    } catch (error) {
      console.error('Profile update error:', error);
      toast.error('Failed to update profile');
    } finally {
      setIsUpdating(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success('Logged out successfully!');
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
    }
  };

  // Handle back to home
  const handleBackToHome = () => {
    navigate('/');
  };

  return {
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
  };
};