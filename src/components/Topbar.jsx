export default function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-[#0B1F33]/10 flex items-center justify-between px-6 md:px-8">

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

    </header>
  );
}