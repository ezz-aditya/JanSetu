
const services = [
  {
    no: "01",
    title: "Certificates",
    desc: "Apply for essential government certificates.",
  },
  {
    no: "02",
    title: "Citizen Services",
    desc: "Access services from multiple departments.",
  },
  {
    no: "03",
    title: "Schemes & Benefits",
    desc: "Discover government schemes available to you.",
  },
  {
    no: "04",
    title: "Applications",
    desc: "Track all your government applications.",
  },
];

const applications = [
  {
    name: "Income Certificate",
    department: "Revenue Department",
    status: "Processing",
    date: "24 Sep 2026",
  },
  {
    name: "Domicile Certificate",
    department: "Citizen Services",
    status: "Approved",
    date: "18 Sep 2026",
  },
  {
    name: "Scholarship Application",
    department: "Education Department",
    status: "Verification",
    date: "15 Sep 2026",
  },
];

export default function Dashboard() {
  return (
    <div className="max-w-[1500px]">

          {/* WELCOME */}
          <section className="relative overflow-hidden bg-[#0B1F33] rounded-2xl p-7 md:p-10 text-white">

            <div className="absolute right-[-100px] top-[-150px] w-[400px] h-[400px] rounded-full bg-[#1B7895]/30 blur-3xl" />

            <div className="relative">

              <p className="text-xs uppercase tracking-[0.2em] text-[#36A9C4] font-bold">
                Citizen Dashboard
              </p>

              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">

                <div>

                  <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] mt-4">
  One gateway.
  <br />
  <span className="text-[#36A9C4]">Connected government.</span>
</h1>

<p className="mt-5 text-white/55 max-w-2xl leading-7">
  GOVCONNECT connects fragmented government platforms through a unified
  interoperability layer — so citizens can access services, track
  applications and manage documents from one place.
</p>

<div className="flex flex-wrap gap-2 mt-6">
  {["CONNECT", "STANDARDIZE", "EXCHANGE", "TRACK"].map((item, index) => (
    <div
      key={item}
      className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5"
    >
      <span className="text-[10px] font-bold text-[#36A9C4]">
        0{index + 1}
      </span>
      <span className="text-[10px] tracking-[0.12em] text-white/60">
        {item}
      </span>
    </div>
  ))}
</div>

                  <p className="mt-5 text-white/45 max-w-xl leading-7">
                    Manage government services, applications and documents
                    from one connected portal.
                  </p>

                </div>

                <button
  onClick={() => window.location.href = "/services"}
  className="bg-[#F4A340] text-[#0B1F33] px-6 py-3 rounded-lg font-bold w-fit hover:bg-white transition"
>
  Explore Services →
</button>

              </div>

            </div>

          </section>
          {/* USP / INTEROPERABILITY FLOW */}
<section className="mt-5 bg-white border border-[#0B1F33]/10 rounded-2xl p-6 md:p-8">

  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">

    {/* LEFT */}
    <div className="max-w-sm">

      <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
        The GOVCONNECT Difference
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1F33] mt-2 tracking-tight">
        Connect, don't replace.
      </h2>

      <p className="text-sm text-[#0B1F33]/50 mt-3 leading-6">
        Existing government platforms stay in place while GOVCONNECT
        creates a unified layer between departments and citizens.
      </p>

    </div>

    {/* FLOW */}
    <div className="flex-1">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">

        {/* EXISTING SYSTEMS */}
        <div className="bg-[#F5F7F8] rounded-xl p-5 border border-[#0B1F33]/10">

          <p className="text-[10px] uppercase tracking-[0.15em] text-[#0B1F33]/40 font-bold">
            Existing Systems
          </p>

          <div className="flex flex-wrap gap-2 mt-4">

            {["Revenue", "Education", "Transport", "Welfare"].map(
              (department) => (
                <span
                  key={department}
                  className="px-3 py-2 bg-white border border-[#0B1F33]/10 rounded-lg text-[11px] text-[#0B1F33]/60"
                >
                  {department}
                </span>
              )
            )}

          </div>

        </div>

        {/* CONNECTOR */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center gap-2 text-[#0B6E99]">
            <span className="h-px w-8 bg-[#0B6E99]/30" />
            <span className="text-lg">→</span>
            <span className="h-px w-8 bg-[#0B6E99]/30" />
          </div>
        </div>

        {/* GOVCONNECT */}
        <div className="bg-[#0B1F33] rounded-xl p-5 text-white relative overflow-hidden">

          <div className="absolute right-[-20px] top-[-20px] w-20 h-20 rounded-full bg-[#36A9C4]/20 blur-xl" />

          <div className="relative">

            <div className="flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-[#36A9C4]" />

              <p className="text-[10px] uppercase tracking-[0.15em] text-[#36A9C4] font-bold">
                GOVCONNECT
              </p>

            </div>

            <p className="text-lg font-semibold mt-3">
              Interoperability Layer
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">

              {["Connect", "Standardize", "Exchange", "Track"].map(
                (item) => (
                  <div
                    key={item}
                    className="text-[10px] text-white/55 border border-white/10 rounded-md px-2 py-2"
                  >
                    {item}
                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

      {/* CITIZEN EXPERIENCE */}
      <div className="mt-3 flex items-center justify-center gap-3">

        <span className="h-px w-8 bg-[#0B6E99]/20" />

        <div className="px-5 py-3 rounded-lg bg-[#0B6E99]/10 text-[#0B6E99] text-xs font-semibold">
          One Connected Citizen Experience
        </div>

        <span className="h-px w-8 bg-[#0B6E99]/20" />

      </div>

    </div>

  </div>

</section>

          {/* STATS */}
          <section className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-5">

            {[
              ["24", "Available Services"],
              ["03", "Active Applications"],
              ["12", "Completed"],
              ["98%", "Platform Availability"],
            ].map(([number, label]) => (

              <div
                key={label}
                className="bg-white border border-[#0B1F33]/10 rounded-xl p-6"
              >

                <p className="text-3xl font-semibold text-[#0B1F33]">
                  {number}
                </p>

                <p className="text-xs text-[#0B1F33]/40 mt-2">
                  {label}
                </p>

              </div>

            ))}

          </section>

          {/* SERVICES */}
          <section className="mt-12">

            <div className="flex justify-between items-end mb-6">

              <div>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
                  Explore
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-[#0B1F33]">
                  Government Services
                </h2>

              </div>

              <button
                onClick={() => window.location.href = "/services"}
                className="text-sm text-[#0B6E99] font-semibold"
              >
             View all →
             </button>

             </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

              {services.map((service) => (

                <button
            key={service.no}
             onClick={() => window.location.href = "/services"}
            className="text-left bg-white border border-[#0B1F33]/10 rounded-xl p-6 hover:border-[#0B6E99]/40 hover:-translate-y-1 transition-all duration-300"
            >

                  <span className="text-xs font-bold text-[#0B6E99]">
                    {service.no}
                  </span>

                  <h3 className="text-lg font-semibold text-[#0B1F33] mt-9">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#0B1F33]/40 mt-2 leading-6">
                    {service.desc}
                  </p>

                  <div className="mt-6 text-sm font-semibold text-[#0B6E99]">
                    Explore →
                  </div>

                </button>

              ))}

            </div>

          </section>

          {/* APPLICATIONS */}
<section className="mt-12">

  <div className="flex items-end justify-between mb-6">

    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
        Activity
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1F33] mt-2">
        Recent Applications
      </h2>

      <p className="text-sm text-[#0B1F33]/40 mt-2">
        Track the latest updates across connected departments.
      </p>
    </div>

    <button
      onClick={() => window.location.href = "/applications"}
      className="hidden md:block text-sm font-semibold text-[#0B6E99] hover:text-[#0B1F33] transition"
    >
      View all applications →
    </button>

  </div>

  <div className="bg-white border border-[#0B1F33]/10 rounded-2xl overflow-hidden">

    {applications.map((application, index) => (

      <button
        key={application.name}
        onClick={() => window.location.href = "/applications"}
        className={`w-full text-left p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:bg-[#F5F7F8] transition ${
          index !== applications.length - 1
            ? "border-b border-[#0B1F33]/10"
            : ""
        }`}
      >

        {/* APPLICATION INFO */}
        <div className="flex items-center gap-4">

          <div className="w-11 h-11 rounded-lg bg-[#0B6E99]/10 text-[#0B6E99] flex items-center justify-center font-bold text-xs">
            APP
          </div>

          <div>

            <h3 className="font-semibold text-[#0B1F33]">
              {application.name}
            </h3>

            <p className="text-sm text-[#0B1F33]/40 mt-1">
              {application.department}
            </p>

          </div>

        </div>

        {/* STATUS */}
        <div className="flex items-center gap-5 md:gap-7">

          <span className="text-xs text-[#0B1F33]/35">
            {application.date}
          </span>

          <span
            className={`px-4 py-2 rounded-full text-xs font-semibold ${
              application.status === "Approved"
                ? "bg-[#16834B]/10 text-[#16834B]"
                : application.status === "Processing"
                ? "bg-[#0B6E99]/10 text-[#0B6E99]"
                : "bg-[#F4A340]/15 text-[#8a5a00]"
            }`}
          >
            {application.status}
          </span>

          <span className="hidden md:block text-[#0B6E99]">
            →
          </span>

        </div>

      </button>

    ))}

  </div>

  {/* MOBILE VIEW ALL */}
  <button
    onClick={() => window.location.href = "/applications"}
    className="md:hidden mt-4 text-sm font-semibold text-[#0B6E99]"
  >
    View all applications →
  </button>

</section>

          {/* INTEGRATION / USP */}
<section className="mt-12 bg-[#0B1F33] rounded-2xl p-7 md:p-10 text-white overflow-hidden relative">

  {/* BACKGROUND ACCENT */}
  <div className="absolute right-[-100px] top-[-100px] w-[300px] h-[300px] rounded-full bg-[#36A9C4]/10 blur-3xl" />

  <div className="relative">

    {/* HEADER */}
    <div className="max-w-2xl">

      <p className="text-[10px] uppercase tracking-[0.2em] text-[#36A9C4] font-bold">
        Core USP · Interoperability
      </p>

      <h2 className="text-2xl md:text-4xl font-semibold mt-3 tracking-tight">
        Connect, don't replace.
      </h2>

      <p className="text-sm md:text-base text-white/45 mt-3 leading-7">
        GOVCONNECT connects existing government platforms through a
        unified interoperability layer, creating one seamless citizen
        experience without replacing existing systems.
      </p>

    </div>


    {/* SYSTEM FLOW */}
    <div className="mt-10 grid lg:grid-cols-[1fr_auto_1.2fr_auto_1fr] gap-4 items-center">


      {/* EXISTING PLATFORMS */}
      <div className="border border-white/10 rounded-xl p-5 bg-white/[0.03]">

        <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 font-bold">
          Existing Platforms
        </p>

        <div className="grid grid-cols-2 gap-2 mt-4">

          {[
            "Revenue",
            "Education",
            "Transport",
            "Welfare",
          ].map((department) => (

            <div
              key={department}
              className="px-3 py-3 rounded-lg bg-white/5 border border-white/5 text-xs text-white/65"
            >
              {department}
            </div>

          ))}

        </div>

      </div>


      {/* ARROW */}
      <div className="hidden lg:flex text-[#36A9C4] text-2xl">
        →
      </div>


      {/* GOVCONNECT */}
      <div className="bg-[#123F5A] border border-[#36A9C4]/20 rounded-xl p-6 shadow-lg">

        <div className="flex items-center gap-2">

          <span className="w-2 h-2 rounded-full bg-[#36A9C4]" />

          <p className="text-[10px] uppercase tracking-[0.18em] text-[#36A9C4] font-bold">
            GOVCONNECT
          </p>

        </div>

        <h3 className="text-xl font-semibold mt-4">
          Interoperability Layer
        </h3>

        <p className="text-xs text-white/45 mt-2 leading-5">
          One common layer for connected government systems.
        </p>

        <div className="grid grid-cols-2 gap-2 mt-5">

          {[
            "Connect",
            "Standardize",
            "Exchange",
            "Track",
          ].map((step, index) => (

            <div
              key={step}
              className="border border-white/10 rounded-lg px-3 py-2.5"
            >

              <span className="text-[9px] text-[#36A9C4] font-bold">
                0{index + 1}
              </span>

              <p className="text-[10px] text-white/65 mt-1">
                {step}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* ARROW */}
      <div className="hidden lg:flex text-[#36A9C4] text-2xl">
        →
      </div>


      {/* CITIZEN */}
      <div className="border border-white/10 rounded-xl p-5 bg-white/[0.03]">

        <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 font-bold">
          Citizen Experience
        </p>

        <div className="mt-4 space-y-2">

          {[
            "One service gateway",
            "Unified application tracking",
            "Connected documents",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/5"
            >

              <span className="w-1.5 h-1.5 rounded-full bg-[#36A9C4]" />

              <span className="text-xs text-white/65">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* BOTTOM USP LINE */}
    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">

      <p className="text-sm text-white/50">
        <span className="text-white font-semibold">
          One connected journey.
        </span>{" "}
        Multiple government systems.
      </p>

      <button
        onClick={() => window.location.href = "/integration"}
        className="text-sm font-semibold text-[#36A9C4] hover:text-white transition"
      >
        View integration architecture →
      </button>

    </div>

  </div>

</section>

    </div>
  );
}