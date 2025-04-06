import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div style={{padding:"16px"}} className="flex h-full w-full">
        {children}
    </div>
  );
}