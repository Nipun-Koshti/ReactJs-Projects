import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-md shadow-inner text-center py-4 mt-auto">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
