import { useState } from "react";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative h-20 bg-white border-b border-[#0B1F33]/10 flex items-center justify-between px-6 md:px-8">

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden w-10 h-10 rounded-lg bg-[#F5F7F8] text-[#0B1F33] flex items-center justify-center text-xl mr-4"
      >
        ☰
      </button>

      {/* SEARCH */}
      <div className="relative w-full max-w-md">

        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B1F33]/30">
          ⌕
        </span>

        <input
          type="text"
          placeholder="Search government services..."
          className="w-full bg-[#F5F7F8] border border-[#0B1F33]/10 rounded-lg pl-11 pr-4 py-3 text-sm outline-none focus:border-[#0B6E99]"
        />

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5 ml-5">

        {/* NOTIFICATION */}
        <button className="relative w-10 h-10 rounded-lg hover:bg-[#F5F7F8] flex items-center justify-center text-lg">
          ♧

          <span className="absolute top-2 right-2 w-2 h-2 bg-[#F4A340] rounded-full" />
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3">

          <div className="hidden md:block text-right">

            <p className="text-sm font-semibold text-[#0B1F33]">
              Aditya Dev
            </p>

            <p className="text-[11px] text-[#0B1F33]/40">
              Citizen
            </p>

          </div>

          <div className="w-10 h-10 rounded-lg bg-[#0B6E99] text-white flex items-center justify-center text-xs font-bold">
            AD
          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#0B1F33] text-white z-50 border-t border-white/10 shadow-xl">

          <div className="p-4 space-y-1">

            <a
              href="/dashboard"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Dashboard
            </a>

            <a
              href="/services"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Services
            </a>

            <a
              href="/applications"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Applications
            </a>

            <a
              href="/documents"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Documents
            </a>

            <a
              href="/schemes"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Schemes & Benefits
            </a>

            <div className="border-t border-white/10 my-2" />

            <a
              href="/integration"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Integration
            </a>

            <a
              href="/settings"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Settings
            </a>

          </div>

        </div>
      )}

    </header>
  );
}