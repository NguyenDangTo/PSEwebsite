import React, { useEffect } from "react";

const GoogleSearch = () => {
  useEffect(() => {
    // Add Google CSE script
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse?cx=47e17e6e927dc41b2";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Google Custom Search</h1>
      <div className="gcse-search"></div> {/* Container for CSE */}
    </div>
  );
};

export default GoogleSearch;
