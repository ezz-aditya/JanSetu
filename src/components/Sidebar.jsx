import { NavLink } from "react-router";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: "⌂" },
  { name: "Services", path: "/services", icon: "▦" },
  { name: "Applications", path: "/applications", icon: "✓" },
  { name: "Documents", path: "/documents", icon: "▤" },
  { name: "Schemes & Benefits", path: "/schemes", icon: "◇" },
];

const systemItems = [
  { name: "Integration", path: "/integration", icon: "↔" },
  { name: "Settings", path: "/settings", icon: "⚙" },
];

function SidebarItem({ item }) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition ${
          isActive
            ? "bg-[#0B6E99] text-white"
            : "text-white/50 hover:bg-white/5 hover:text-white"
        }`
      }
    >
      <span className="w-5 text-center text-base">
        {item.icon}
      </span>

      <span>{item.name}</span>
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-[250px] min-h-screen bg-[#0B1F33] text-white flex-col fixed left-0 top-0">

      {/* Logo */}
      <div className="px-6 py-7 border-b border-white/10">
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-[#F4A340] text-[#0B1F33] flex items-center justify-center font-bold">
            G
          </div>

          <div>
            <p className="font-bold tracking-tight">
              GOVCONNECT
            </p>

            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              Digital Government
            </p>
          </div>

        </div>
      </div>

      {/* Main Menu */}
      <div className="px-4 py-7">

        <p className="px-3 mb-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
          Main Menu
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
            />
          ))}
        </div>

      </div>

      {/* System */}
      <div className="px-4">

        <p className="px-3 mb-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
          System
        </p>

        <div className="space-y-1">
          {systemItems.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
            />
          ))}
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-auto p-4">

        <div className="bg-white/5 rounded-xl p-4">

          <p className="text-xs text-white/40">
            Platform Status
          </p>

          <div className="flex items-center gap-2 mt-3">

            <span className="w-2 h-2 rounded-full bg-[#36A9C4]" />

            <span className="text-xs">
              All systems operational
            </span>

          </div>

        </div>

        <button className="w-full text-left text-sm text-white/40 hover:text-white px-3 py-4">
          ↪ Logout
        </button>

      </div>

    </aside>
  );
}