import React, { PropsWithChildren } from "react";

const NavBar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="sticky top-0 px-4 dark:bg-slate-700 bg-gray-300 shadow-md rounded">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-baseline space-x-4">{children}</div>
      </div>
    </nav>
  );
};

export default NavBar;
