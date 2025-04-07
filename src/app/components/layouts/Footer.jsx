import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center text-gray-400 py-2 text-sm">
      <p>&copy; {currentYear} Gharniyas. All rights reserved.</p>
    </div>
  );
};

export default Footer;
