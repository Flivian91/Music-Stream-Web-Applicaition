export const convertToTime = (decimalNumber) => {
  const hours = Math.floor(decimalNumber / 60); // Get hours by dividing by 60 (since 1 hour = 60 minutes)
  const minutes = Math.floor(decimalNumber % 60); // Get remaining minutes using modulus
  const seconds = Math.floor((decimalNumber - Math.floor(decimalNumber)) * 60); // Get the seconds
  
  // Format minutes and seconds to always have two digits
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
  // If there are hours, include them in the output, otherwise just display minutes and seconds
  return hours > 0 ? `${hours}:${formattedMinutes}:${formattedSeconds}` : `0:${formattedMinutes}:${formattedSeconds}`;
};

// const time = convertToTimeWithHours(2.1901061200000003); // Example value
// console.log(time); // Outputs: "02:11" (No hours in this case)
