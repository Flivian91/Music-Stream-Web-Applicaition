function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-transparent border-l-4 border-r-4 border-gradient-to-r from-green-400 via-red-500 to-white-700"></div>
    </div>
  );
}

export default LoadingSpinner;
