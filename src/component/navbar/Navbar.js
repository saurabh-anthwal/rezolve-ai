import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="border-b p-3 shadow-lg shadow-outer bg-white">
        <ul>
          <li>
            <img
              src="https://as-cdn.azureedge.net/dd6f4d3c-b6db-11ea-b527-97167778fcab-public/logo.png"
              alt="logo"
              className="h-12 ml-2"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
