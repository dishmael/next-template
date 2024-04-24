import { Globe } from "lucide-react";
import React from "react";

export const Brand = () => {
  const brandName = "Acme, Inc.";
  return (
    <div className="flex text-2xl font-semibold items-center space-x-2">
      <Globe size={22} />
      <span>{brandName}</span>
    </div>
  );
};
