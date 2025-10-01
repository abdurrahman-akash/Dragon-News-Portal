import { Toaster as HotToaster } from 'react-hot-toast';

const Toaster = () => {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        // Default options for all toasts
        duration: 4000,
        style: {
          background: '#363636',
          color: '#fff',
          borderRadius: '10px',
          padding: '16px',
          fontSize: '14px',
          maxWidth: '500px',
        },
        // Success toast styling
        success: {
          duration: 4000,
          style: {
            background: '#10B981',
            color: '#fff',
          },
        },
        // Error toast styling
        error: {
          duration: 5000,
          style: {
            background: '#EF4444',
            color: '#fff',
          },
        },
        // Loading toast styling
        loading: {
          style: {
            background: '#3B82F6',
            color: '#fff',
          },
        },
      }}
    />
  )
};

export default Toaster;
