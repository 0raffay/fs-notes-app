import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

export default function Layout() {
  return (
    <div
      id="layout"
      className="min-h-screen bg-dark-700 grid grid-cols-[380px,1fr]"
    >
      <Sidebar />
      <div></div>
      <main>
        <div className="px-28 py-32">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
