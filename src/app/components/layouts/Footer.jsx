import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center text-sm text-slate-500">
      <p>
        &copy; {currentYear} Gharniyas Ramesh. Built with{" "}
        <span className="text-[#D4FF24]">Next.js</span>.
      </p>
    </div>
  );
};

export default Footer;
