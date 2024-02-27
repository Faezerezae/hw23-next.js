import { GuardProvider } from "../providers/guard-provider";
import type { Metadata } from "next";

import SideBar from "@/components/SideBar";


const metadata: Metadata = {
  title: "Admin dashboard",
  description: "Accouting agency admin dashboard",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GuardProvider roleMode="admin">
      <SideBar />
      <div className="md:pl-64 flex flex-col flex-1">
        <main>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
               {children}
            </div>
        </main>
      </div>
    </GuardProvider>
  );
}
