import DashHeader from "@/components/pages/dashboard/DashHeader";
import Sidebar from "@/components/pages/dashboard/Sidebar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <section className="flex">
        <Sidebar />
        <div className="grow-1 h-screen">
          <div className="h-[15vh]">
            <DashHeader />
          </div>
          <div className="h-[85vh] bg-[var(--background)]">{children}</div>
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
