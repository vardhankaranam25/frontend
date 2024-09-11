import { useEffect } from "react";
function Background() {
    useEffect(() => {
        // Store the original background color
        const originalBackgroundColor = document.body.style.backgroundColor;
    
        // Change the background color to your desired color
        document.body.style.backgroundColor = "black";
        //document.body.style.backgroundImage = './background.jpeg';
    
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

export default Background;