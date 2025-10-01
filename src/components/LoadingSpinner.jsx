const LoadingSpinner = ({ message = "Loading...", size = "lg" }) => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="text-center">
        <span className={`loading loading-spinner loading-${size}`}></span>
        <p className="mt-4 text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;