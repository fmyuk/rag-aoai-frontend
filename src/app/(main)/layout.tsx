"use client";

import React from "react";
// import SideMenu from ''

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* <SideMenu /> */}
      <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
