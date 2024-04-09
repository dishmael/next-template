"use client"

import React from "react";

/**
 * A lot of the UI component libraries require themes that cannot run on the
 * server. This DefaultLayout component acts as a wrapper to utilize those
 * client-side components without interferring with the standard layout code
 * that runs on the server.
 * 
 * @param param0 
 * @returns 
 */
export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
