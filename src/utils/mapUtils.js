export const handleMapClick = (e) => {
  e.preventDefault();
  // Check for iOS, iPadOS, or macOS
  const isApple = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  
  // We use the exact address for Apple Maps instead of the business name 
  // because Apple's database currently has the old address (45 Webster Commons) for A&J Pharmacy.
  const appleUrl = "https://maps.apple.com/?address=1900+Empire+Blvd+Suite+160,+Webster,+NY+14580";
  const googleUrl = "https://www.google.com/maps/search/?api=1&query=A%26J+Pharmacy+1900+Empire+Blvd+Suite+160+Webster+NY";
  
  if (isApple) {
    window.open(appleUrl, '_blank');
  } else {
    window.open(googleUrl, '_blank');
  }
};
