import React from "react";

const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="dark:bg-white bg-gray-200 dark:text-slate-500 text-slate-800 rounded-lg shadow-md p-4 mb-8 md:mr-8">
      {children}
    </div>
  );
};

export default Card;
