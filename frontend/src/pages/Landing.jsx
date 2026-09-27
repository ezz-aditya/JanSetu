import { useNavigate } from "react-router";

const services = [
  {
    number: "01",
    title: "Certificates",
    description:
      "Apply for and manage essential government certificates.",
  },
  {
    number: "02",
    title: "Public Services",
    description:
      "Access services from multiple government departments.",
  },
  {
    number: "03",
    title: "Schemes & Benefits",
    description:
      "Discover government schemes and available benefits.",
  },
  {
    number: "04",
    title: "Applications",
    description:
      "Track all your applications from one place.",
  },
];

function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
          light
            ? "bg-[#6FFFE9] text-[#0B132B]"
            : "bg-[#0B132B] text-white"
        }`}
      >
        J
      </div>

      <div>
        <p
          className={`font-bold tracking-tight ${
            light ? "text-white" : "text-[#0B132B]"
          }`}
        >
          JAN SETU
        </p>

        <p
          className={`text-[9px] uppercase tracking-[0.2em] ${
            light ? "text-white/45" : "text-[#3A506B]"
          }`}
        >
          Digital Governance
        </p>
      </div>
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FBFB] text-[#0B132B]">

      {/* TOP BAR */}
      <div className="bg-[#0B132B] text-white px-6 md:px-10 py-2">
        <div className="max-w-7xl mx-auto flex justify-between text-[11px]">
          <span>Government Digital Services</span>

          <span className="text-white/45 hidden md:block">
            Maharashtra • India
          </span>
        </div>
      </div>


      {/* NAVBAR */}
      <nav className="bg-white border-b border-[#0B132B]/10">

        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

          <Logo />

          <div className="hidden md:flex items-center gap-9 text-sm text-[#0B132B]/65">

            <a
              href="#services"
              className="hover:text-[#3A506B] transition"
            >
              Services
            </a>

            <a
              href="#integration"
              className="hover:text-[#3A506B] transition"
            >
              Integration
            </a>

            <a
              href="#about"
              className="hover:text-[#3A506B] transition"
            >
              About
            </a>

            <a
              href="#help"
              className="hover:text-[#3A506B] transition"
            >
              Help
            </a>

          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#3A506B] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#0B132B] transition"
          >
            Citizen Login →
          </button>

        </div>

      </nav>


      {/* HERO */}
      <section className="bg-[#0B132B] text-white relative overflow-hidden">

        {/* Decorative glow */}
        <div className="absolute right-[-150px] top-[-180px] w-[550px] h-[550px] rounded-full bg-[#3A506B]/35 blur-3xl" />

        <div className="absolute right-[10%] bottom-[-200px] w-[420px] h-[420px] rounded-full bg-[#5BC0BE]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">

          <div className="max-w-5xl">

            {/* LABEL */}
            <div className="flex items-center gap-3 mb-8">

              <span className="w-2 h-2 rounded-full bg-[#6FFFE9]" />

              <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                Unified Government Platform
              </p>

            </div>


            {/* HEADING */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.92] tracking-[-0.06em]">

              One Government.

              <br />

              <span className="text-[#5BC0BE]">
                Connected Services.
              </span>

            </h1>


            <p className="mt-9 max-w-2xl text-lg md:text-xl text-white/50 leading-8">
              JAN SETU connects existing government platforms,
              departments and citizens through one unified
              interoperability layer.
            </p>


            {/* USP */}
            <div className="mt-8 max-w-2xl border-l-2 border-[#5BC0BE] pl-5">

              <p className="text-xs uppercase tracking-[0.18em] text-[#6FFFE9] font-bold">
                Core USP
              </p>

              <p className="text-xl md:text-2xl font-semibold mt-2">
                Connect, don't replace.
              </p>

              <p className="text-sm text-white/40 mt-2 leading-6">
                Existing government systems remain in place while
                JAN SETU creates a common layer for interoperability.
              </p>

            </div>


            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button
                onClick={() => navigate("/dashboard")}
                className="bg-[#5BC0BE] text-[#0B132B] px-7 py-4 rounded-lg font-bold hover:bg-[#6FFFE9] transition"
              >
                Explore Services →
              </button>

              <a
                href="#integration"
                className="border border-white/20 px-7 py-4 rounded-lg hover:bg-white hover:text-[#0B132B] transition text-center"
              >
                How It Works
              </a>

            </div>

          </div>

        </div>


        {/* HERO FLOW */}
        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-wrap gap-x-10 gap-y-3 text-xs">

            <span className="text-white/40">
              01 / CONNECT
            </span>

            <span className="text-white/40">
              02 / STANDARDIZE
            </span>

            <span className="text-white/40">
              03 / EXCHANGE
            </span>

            <span className="text-[#6FFFE9]">
              04 / TRACK
            </span>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="bg-[#3A506B] text-white">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4">

          {[
            ["24+", "Digital Services"],
            ["12", "Connected Departments"],
            ["98%", "Platform Availability"],
            ["01", "Unified Gateway"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="py-4 md:border-r md:border-white/15 last:border-0"
            >

              <p className="text-4xl font-semibold">
                {value}
              </p>

              <p className="text-xs text-white/50 mt-2">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* SERVICES */}
      <section
        id="services"
        className="bg-[#F8FBFB] px-6 md:px-10 py-24 md:py-28"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10 mb-16">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#3A506B] font-bold">
                Citizen Services
              </p>

              <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] mt-4">

                Everything

                <br />

                <span className="text-[#3A506B]">
                  connected.
                </span>

              </h2>

            </div>

            <div className="md:pt-14">

              <p className="text-lg text-[#0B132B]/55 leading-8 max-w-md">
                Access multiple government services through a single
                connected digital experience.
              </p>

            </div>

          </div>


          <div className="border-t border-[#0B132B]/10">

            {services.map((service) => (

              <button
                key={service.number}
                onClick={() => navigate("/services")}
                className="w-full text-left group border-b border-[#0B132B]/10 py-9 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:px-4 hover:bg-[#5BC0BE]/10 transition-all duration-300"
              >

                <div className="flex items-center gap-7">

                  <span className="text-xs text-[#3A506B] font-bold">
                    {service.number}
                  </span>

                  <h3 className="text-3xl md:text-5xl font-semibold">
                    {service.title}
                  </h3>

                </div>

                <div className="flex items-center gap-8">

                  <p className="max-w-sm text-sm text-[#0B132B]/50">
                    {service.description}
                  </p>

                  <span className="text-xl text-[#5BC0BE] group-hover:translate-x-2 transition">
                    →
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* INTEGRATION */}
      <section
        id="integration"
        className="bg-[#DCEBEC] px-6 md:px-10 py-24 md:py-28"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#3A506B] font-bold">
              Interoperability
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] mt-4">

              Different systems.

              <br />

              <span className="text-[#3A506B]">
                One layer.
              </span>

            </h2>

            <p className="mt-8 max-w-xl text-[#0B132B]/55 leading-7">
              JAN SETU provides a common integration layer that allows
              different government platforms to exchange information
              through standardized interfaces.
            </p>

          </div>


          {/* RIGHT */}
          <div className="bg-[#1C2541] rounded-2xl p-6 md:p-8">

            {[
              "Revenue Department",
              "Education Department",
              "Transport Department",
              "Social Welfare Department",
            ].map((department) => (

              <div
                key={department}
                className="border border-white/10 rounded-lg p-5 mb-3 flex justify-between items-center text-white"
              >

                <span className="text-sm">
                  {department}
                </span>

                <span className="flex items-center gap-2 text-xs text-white/50">

                  <span className="w-2 h-2 rounded-full bg-[#6FFFE9]" />

                  Connected

                </span>

              </div>

            ))}


            <div className="text-center text-[#5BC0BE] text-2xl py-4">
              ↓
            </div>


            <div className="bg-[#5BC0BE] text-[#0B132B] rounded-lg p-5 text-center font-bold">

              JAN SETU

              <span className="block text-[10px] font-normal text-[#0B132B]/60 mt-1">
                Unified Interoperability Layer
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#F8FBFB] px-6 md:px-10 py-24 md:py-28"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#3A506B] font-bold">
              The Objective
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] mt-4">

              Government

              <br />

              <span className="text-[#3A506B]">
                without silos.
              </span>

            </h2>

          </div>


          <div className="md:pt-14">

            <p className="text-xl leading-8 text-[#0B132B]/60">
              Citizens shouldn't need to understand the structure of
              government systems to access government services.
            </p>

            <button
              onClick={() => navigate("/dashboard")}
              className="mt-8 bg-[#3A506B] text-white px-7 py-4 rounded-lg hover:bg-[#0B132B] transition"
            >
              Open Citizen Portal →
            </button>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#0B132B] text-white px-6 md:px-10 py-12">

        <div className="max-w-7xl mx-auto">

          <Logo light />

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/30">

            <span>
              JAN SETU 
            </span>

            <span>
              Digital Governance • 2026
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}