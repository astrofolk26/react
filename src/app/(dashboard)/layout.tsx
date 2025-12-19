import React from "react";
import "../globals.css";
import DashboardLayout from "@/components/layouts/dashboard-layout/DashboardLayout";
import GlobalProvider from "@/utils/context/Provider";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <GlobalProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </GlobalProvider>
    </>
  );
};

export default layout;
