// src/components/PageLayout.js
import React from "react";
import Home from "./Home";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Home />  {/* Dynamic header based on URL */}
      <div className="mt-0 pt-0 pl-0 pr-0 relative z-20 bg-white p-0 rounded-t-3xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
