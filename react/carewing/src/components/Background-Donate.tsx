import { useEffect } from "react";
function Background_Donate() {
    useEffect(() => {
        // Store the original background color
        const originalBackgroundColor = document.body.style.backgroundColor;
    
        // Change the background color to your desired color
        document.body.style.backgroundColor = "rgb(255,255,255)";
    
        // Optional: Revert to the original background color on unmount
        return () => {
          document.body.style.backgroundColor = originalBackgroundColor;
        };
      }, []);
    return (
        <>
        </>
    )
}

export default Background_Donate;