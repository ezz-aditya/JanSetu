import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#F5F7F8]">

      <Sidebar />

      <div className="lg:ml-[250px]">

        <Topbar />

        <main className="p-6 md:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}