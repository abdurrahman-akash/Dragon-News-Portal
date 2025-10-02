import React from 'react'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-6">
                <h1 className="text-6xl font-bold text-red-500 mb-2">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
            </div>
            
            <div className="space-y-4">
                <button 
                    onClick={() => window.history.back()}
                    className="w-full bg-primary hover:bg-primary-focus text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                    Go Back
                </button>
                
                <button 
                    onClick={() => window.location.href = '/'}
                    className="w-full bg-secondary hover:bg-secondary-focus text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                    Go Home
                </button>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    {window.location.pathname}
                </span>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage;
