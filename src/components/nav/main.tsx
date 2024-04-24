import React, { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-grow overflow-x-auto overflow-y-auto p-4">
      {children}
    </div>
  );
};

export default Main;
