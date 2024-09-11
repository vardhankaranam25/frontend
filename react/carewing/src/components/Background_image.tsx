
import { useEffect } from "react";

export function Background_Image() {
  useEffect(() => {
    // Store the original background
    const originalBackgroundImage = document.body.style.backgroundImage;
    const originalBackgroundColor = document.body.style.backgroundColor;

    // Change the background to your desired image
    document.body.style.backgroundImage = "url('./images/login_page.jpeg')"; // Set the correct path to your image
    //document.body.style.backgroundColor = "rgb(255,255,255)"; // You can remove this if not needed
    document.body.style.backgroundSize = 'cover'; // Make sure the image covers the whole background
    document.body.style.backgroundPosition = 'center center'; // Center the image
    document.body.style.backgroundRepeat = 'no-repeat'; // Don't repeat the image

    // Optional: Revert to the original background on unmount
    return () => {
      document.body.style.backgroundImage = originalBackgroundImage;
    };
  }, []);

  return (
    <>
      
    </>
  );
}

export default Background_Image;

