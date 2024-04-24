import React, { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="flex-grow overflow-x-auto overflow-y-auto p-4">
      {children}
    </div>
  );
};

export default Main;
