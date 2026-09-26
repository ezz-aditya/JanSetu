import { useState } from "react";

const C = {
  gunmetal: "#2E3532",
  amaranth: "#8B2635",
  linen: "#E0E2DB",
  dust: "#D2D4C8",
  tea: "#D3EFBD",
};

const services = [
  {
    number: "01",
    title: "Certificates",
    description: "Apply for and manage essential government certificates.",
  },
  {
    number: "02",
    title: "Public Services",
    description: "Access services from multiple government departments.",
  },
  {
    number: "03",
    title: "Schemes & Benefits",
    description: "Discover government schemes and available benefits.",
  },
  {
    number: "04",
    title: "Applications",
    description: "Track all your applications from one place.",
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

function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
          light
            ? "bg-[#D3EFBD] text-[#2E3532]"
            : "bg-[#8B2635] text-white"
        }`}
      >
        G
      </div>

      <div>
        <p
          className={`font-bold tracking-tight ${
            light ? "text-white" : "text-[#2E3532]"
          }`}
        >
          GOVCONNECT
        </p>

        <p
          className={`text-[9px] uppercase tracking-[0.2em] ${
            light ? "text-white/50" : "text-[#8B2635]"
          }`}
        >
          Digital Governance
        </p>
      </div>
    </div>
  );
}

function Landing({ onEnter }) {
  return (
    <div className="min-h-screen bg-[#E0E2DB] text-[#2E3532]">

      {/* TOP BAR */}
      <div className="bg-[#2E3532] text-white px-6 md:px-10 py-2">
        <div className="max-w-7xl mx-auto flex justify-between text-[11px]">
          <span>Government Digital Services</span>
          <span className="text-white/50 hidden md:block">
            Maharashtra • India
          </span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-[#E0E2DB] border-b border-[#2E3532]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

          <Logo />

          <div className="hidden md:flex items-center gap-9 text-sm">
            <a href="#services" className="hover:text-[#8B2635] transition">
              Services
            </a>

            <a
              href="#integration"
              className="hover:text-[#8B2635] transition"
            >
              Integration
            </a>

            <a href="#about" className="hover:text-[#8B2635] transition">
              About
            </a>

            <a href="#help" className="hover:text-[#8B2635] transition">
              Help
            </a>
          </div>

          <button
            onClick={onEnter}
            className="bg-[#8B2635] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#2E3532] transition"
          >
            Citizen Login →
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#2E3532] text-white relative overflow-hidden">

        <div className="absolute right-[-120px] top-[-160px] w-[500px] h-[500px] rounded-full bg-[#8B2635]/30 blur-3xl" />

        <div className="absolute left-[-100px] bottom-[-200px] w-[400px] h-[400px] rounded-full bg-[#D3EFBD]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3 mb-8">

              <span className="w-2 h-2 rounded-full bg-[#D3EFBD]" />

              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                Unified Government Platform
              </p>

            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.92] tracking-[-0.06em]">
              One Government.
              <br />

              <span className="text-[#D3EFBD]">
                Connected Services.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-lg md:text-xl text-white/55 leading-8">
              A unified digital gateway connecting government platforms,
              departments and citizens through interoperable services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button
                onClick={onEnter}
                className="bg-[#D3EFBD] text-[#2E3532] px-7 py-4 rounded-full font-bold hover:bg-white transition"
              >
                Explore Services →
              </button>

              <button className="border border-white/20 px-7 py-4 rounded-full hover:bg-white hover:text-[#2E3532] transition">
                How It Works
              </button>

            </div>

          </div>

        </div>

        {/* HERO FOOTER */}
        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-wrap gap-x-10 gap-y-3 text-xs text-white/40">

            <span>01 / CONNECT</span>
            <span>02 / INTEGRATE</span>
            <span>03 / SIMPLIFY</span>
            <span>04 / DELIVER</span>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="bg-[#8B2635] text-white">

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
      <section id="services" className="bg-[#E0E2DB] px-6 md:px-10 py-28">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10 mb-16">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#8B2635] font-bold">
                Citizen Services
              </p>

              <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] mt-4">
                Everything
                <br />
                connected.
              </h2>

            </div>

            <div className="md:pt-14">

              <p className="text-lg text-[#2E3532]/60 leading-8 max-w-md">
                Access multiple government services through a single
                connected digital experience.
              </p>

            </div>

          </div>

          <div className="border-t border-[#2E3532]/20">

            {services.map((service) => (

              <div
                key={service.number}
                className="group border-b border-[#2E3532]/20 py-9 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:px-4 transition-all duration-300"
              >

                <div className="flex items-center gap-7">

                  <span className="text-xs text-[#8B2635] font-bold">
                    {service.number}
                  </span>

                  <h3 className="text-3xl md:text-5xl font-semibold">
                    {service.title}
                  </h3>

                </div>

                <div className="flex items-center gap-8">

                  <p className="max-w-sm text-sm text-[#2E3532]/50">
                    {service.description}
                  </p>

                  <span className="text-xl group-hover:translate-x-2 transition">
                    ↗
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* INTEGRATION */}
      <section
        id="integration"
        className="bg-[#D2D4C8] px-6 md:px-10 py-28"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#8B2635] font-bold">
              Interoperability
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] mt-4">
              Different systems.
              <br />
              One layer.
            </h2>

            <p className="mt-8 max-w-xl text-[#2E3532]/60 leading-7">
              A common integration layer allows different government
              platforms to exchange information through standardized
              interfaces.
            </p>

          </div>

          <div className="bg-[#2E3532] rounded-2xl p-6 md:p-8">

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
                  <span className="w-2 h-2 rounded-full bg-[#D3EFBD]" />
                  Connected
                </span>

              </div>

            ))}

            <div className="text-center text-[#D3EFBD] text-2xl py-4">
              ↓
            </div>

            <div className="bg-[#8B2635] text-white rounded-lg p-5 text-center font-bold">
              UNIFIED SERVICE GATEWAY
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#D3EFBD] px-6 md:px-10 py-28"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#8B2635] font-bold">
              The Objective
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] mt-4">
              Government
              <br />
              without silos.
            </h2>

          </div>

          <div className="md:pt-14">

            <p className="text-xl leading-8 text-[#2E3532]/70">
              Citizens shouldn't need to understand the structure of
              government systems to access government services.
            </p>

            <button
              onClick={onEnter}
              className="mt-8 bg-[#2E3532] text-white px-7 py-4 rounded-full hover:bg-[#8B2635] transition"
            >
              Open Citizen Portal →
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#2E3532] text-white px-6 md:px-10 py-12">

        <div className="max-w-7xl mx-auto">

          <Logo light />

          <div className="border-t border-white/10 mt-10 pt-6 flex justify-between text-xs text-white/30">

            <span>GOVCONNECT / SIH26129</span>

            <span>Digital Governance • 2026</span>

          </div>

        </div>

      </footer>

    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#E0E2DB] text-[#2E3532]">

      {/* NAV */}
      <nav className="bg-[#2E3532] text-white">

        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

          <Logo light />

          <div className="flex items-center gap-4">

            <div className="hidden md:block text-right">

              <p className="text-sm font-semibold">
                Aditya Dev
              </p>

              <p className="text-xs text-white/40">
                Citizen
              </p>

            </div>

            <div className="w-10 h-10 rounded-full bg-[#8B2635] flex items-center justify-center text-sm font-bold">
              AD
            </div>

          </div>

        </div>

      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-12">

        {/* WELCOME */}
        <section className="bg-[#8B2635] text-white rounded-2xl p-8 md:p-12">

          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Citizen Dashboard
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

            <div>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] mt-4">
                Welcome back,
                <br />
                Aditya.
              </h1>

              <p className="mt-5 max-w-xl text-white/55 leading-7">
                Manage government services, applications and documents
                from one connected portal.
              </p>

            </div>

            <button className="bg-[#D3EFBD] text-[#2E3532] px-6 py-3 rounded-full font-bold w-fit">
              + New Application
            </button>

          </div>

        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

          {[
            ["24", "Available Services"],
            ["03", "Active Applications"],
            ["12", "Completed"],
            ["98%", "Platform Availability"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="bg-[#D2D4C8] p-6 rounded-xl border border-[#2E3532]/10"
            >

              <p className="text-4xl font-semibold">
                {value}
              </p>

              <p className="text-xs text-[#2E3532]/50 mt-2">
                {label}
              </p>

            </div>

          ))}

        </section>

        {/* SERVICES */}
        <section className="mt-16">

          <div className="flex justify-between items-end mb-8">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#8B2635] font-bold">
                Explore
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                Government Services
              </h2>

            </div>

            <button className="text-sm font-semibold text-[#8B2635]">
              View all →
            </button>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {services.map((service) => (

              <div
                key={service.number}
                className="bg-[#E0E2DB] border border-[#2E3532]/15 rounded-xl p-6 hover:bg-white hover:border-[#8B2635]/40 hover:-translate-y-1 transition-all duration-300"
              >

                <span className="text-xs text-[#8B2635] font-bold">
                  {service.number}
                </span>

                <h3 className="text-xl font-semibold mt-10">
                  {service.title}
                </h3>

                <p className="text-sm text-[#2E3532]/50 mt-3 leading-6">
                  {service.description}
                </p>

                <button className="mt-6 text-sm font-semibold text-[#8B2635]">
                  Explore →
                </button>

              </div>

            ))}

          </div>

        </section>

        {/* APPLICATIONS */}
        <section className="mt-16">

          <p className="text-xs uppercase tracking-[0.25em] text-[#8B2635] font-bold">
            Activity
          </p>

          <h2 className="text-3xl font-semibold mt-2 mb-7">
            Recent Applications
          </h2>

          <div className="bg-[#E0E2DB] border border-[#2E3532]/15 rounded-xl overflow-hidden">

            {applications.map((application, index) => (

              <div
                key={application.name}
                className={`p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 ${
                  index !== applications.length - 1
                    ? "border-b border-[#2E3532]/10"
                    : ""
                }`}
              >

                <div>

                  <h3 className="font-semibold">
                    {application.name}
                  </h3>

                  <p className="text-sm text-[#2E3532]/45 mt-1">
                    {application.department}
                  </p>

                </div>

                <div className="flex items-center gap-6">

                  <span className="text-xs text-[#2E3532]/40">
                    {application.date}
                  </span>

                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold ${
                      application.status === "Approved"
                        ? "bg-[#D3EFBD] text-[#2E3532]"
                        : application.status === "Processing"
                        ? "bg-[#8B2635] text-white"
                        : "bg-[#D2D4C8] text-[#2E3532]"
                    }`}
                  >
                    {application.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* CONNECTED SYSTEMS */}
        <section className="mt-16 bg-[#2E3532] rounded-2xl p-8 md:p-10 text-white">

          <p className="text-xs uppercase tracking-[0.25em] text-[#D3EFBD] font-bold">
            Interoperability Layer
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Connected Government
          </h2>

          <div className="grid md:grid-cols-4 gap-3 mt-8">

            {[
              "Revenue",
              "Education",
              "Transport",
              "Social Welfare",
            ].map((department) => (

              <div
                key={department}
                className="border border-white/10 rounded-lg p-5"
              >

                <div className="flex items-center gap-2">

                  <span className="w-2 h-2 rounded-full bg-[#D3EFBD]" />

                  <span className="text-xs text-white/50">
                    Connected
                  </span>

                </div>

                <p className="mt-5 text-sm">
                  {department}
                </p>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default function App() {

  const [dashboard, setDashboard] = useState(false);

  return dashboard ? (
    <Dashboard />
  ) : (
    <Landing onEnter={() => setDashboard(true)} />
  );
}