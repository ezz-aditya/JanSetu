import { useState } from "react";

const services = [
  {
    title: "Certificates",
    desc: "Apply and track essential government certificates.",
    number: "01",
  },
  {
    title: "Public Services",
    desc: "Access services from multiple departments.",
    number: "02",
  },
  {
    title: "Schemes & Benefits",
    desc: "Discover eligible government schemes.",
    number: "03",
  },
  {
    title: "Applications",
    desc: "Track every application from one place.",
    number: "04",
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

function Landing({ onEnter }) {
  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#111] overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold">
              G
            </div>

            <span className="font-semibold tracking-tight">
              ADITYA<span className="font-light">CONNECT</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#services" className="hover:opacity-50 transition">
              Services
            </a>
            <a href="#about" className="hover:opacity-50 transition">
              About
            </a>
            <a href="#impact" className="hover:opacity-50 transition">
              Impact
            </a>
          </div>

          <button
            onClick={onEnter}
            className="border border-black rounded-full px-5 py-2 text-sm hover:bg-black hover:text-white transition"
          >
            Enter Portal →
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-24">

        <div className="max-w-7xl mx-auto w-full">

          <div className="max-w-5xl">

            <p className="uppercase tracking-[0.25em] text-xs mb-8 text-neutral-500">
              Maharashtra • Digital Governance
            </p>

            <h1 className="text-[13vw] md:text-[9vw] leading-[0.82] tracking-[-0.07em] font-semibold">
              One
              <br />
              Government.
            </h1>

            <div className="flex flex-col md:flex-row md:items-end gap-8 mt-10">

              <h2 className="text-5xl md:text-7xl tracking-[-0.05em] font-light">
                Connected.
              </h2>

              <p className="max-w-sm text-sm leading-6 text-neutral-500">
                A unified digital gateway connecting government services,
                departments and citizens through one seamless experience.
              </p>

            </div>

          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-4">

            <button
              onClick={onEnter}
              className="group bg-black text-white rounded-full px-7 py-4 flex items-center gap-8 w-fit"
            >
              Explore Services

              <span className="group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>

            <button className="rounded-full border border-black/20 px-7 py-4 hover:bg-white transition">
              Discover the system
            </button>

          </div>

        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-black/10 overflow-hidden py-5 whitespace-nowrap">
        <div className="animate-[marquee_18s_linear_infinite] text-4xl md:text-6xl font-light tracking-tight">
          CONNECT • INTEGRATE • SIMPLIFY • DELIVER • CONNECT • INTEGRATE •
          SIMPLIFY • DELIVER •
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-12 py-32">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-end mb-16">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-5">
                01 / Services
              </p>

              <h2 className="text-5xl md:text-7xl tracking-[-0.05em]">
                Everything.
                <br />
                In one place.
              </h2>
            </div>

            <span className="hidden md:block text-sm text-neutral-400">
              04 core service groups
            </span>

          </div>

          <div className="border-t border-black">

            {services.map((service) => (
              <div
                key={service.number}
                className="group border-b border-black/20 py-8 flex items-center justify-between hover:px-5 transition-all duration-500"
              >

                <div className="flex items-center gap-8">

                  <span className="text-xs text-neutral-400">
                    {service.number}
                  </span>

                  <h3 className="text-3xl md:text-5xl tracking-tight">
                    {service.title}
                  </h3>

                </div>

                <div className="hidden md:flex items-center gap-8">

                  <p className="max-w-xs text-sm text-neutral-500">
                    {service.desc}
                  </p>

                  <span className="text-2xl group-hover:translate-x-2 transition">
                    ↗
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROBLEM / SOLUTION */}
      <section
        id="about"
        className="bg-black text-white px-6 md:px-12 py-32"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-6">
              The problem
            </p>

            <h2 className="text-5xl md:text-7xl tracking-[-0.05em]">
              Fragmented
              <br />
              systems.
            </h2>
          </div>

          <div className="md:pt-16">

            <p className="text-xl md:text-3xl font-light leading-relaxed text-white/70">
              Citizens shouldn't have to understand how government systems
              work behind the scenes.
            </p>

            <p className="mt-8 text-sm leading-7 text-white/40 max-w-lg">
              GovConnect creates a unified experience across departments,
              reducing fragmented service delivery and making digital
              government simpler to navigate.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white px-6 md:px-12 pb-10">

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex justify-between text-xs text-white/40">
          <span>GOVCONNECT / SIH26129</span>
          <span>Digital Governance · 2026</span>
        </div>

      </footer>

    </main>
  );
}


function Dashboard() {
  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#111]">

      {/* DASHBOARD NAV */}
      <nav className="border-b border-black/10 px-6 md:px-10 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-bold">
            G
          </div>

          <span className="font-semibold">
            GOV<span className="font-light">CONNECT</span>
          </span>

        </div>

        <div className="flex items-center gap-4">

          <div className="hidden md:block text-right">
            <p className="text-sm font-medium">Aditya Dev</p>
            <p className="text-xs text-neutral-400">Citizen</p>
          </div>

          <div className="w-10 h-10 rounded-full bg-neutral-300 flex items-center justify-center">
            AD
          </div>

        </div>

      </nav>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-5">
              Citizen Dashboard
            </p>

            <h1 className="text-5xl md:text-7xl tracking-[-0.06em]">
              Good afternoon,
              <br />
              <span className="text-neutral-400">Aditya.</span>
            </h1>

          </div>

          <button className="bg-black text-white rounded-full px-6 py-3 w-fit">
            + New Application
          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 mt-16">

          {[
            ["24", "Available Services"],
            ["03", "Active Applications"],
            ["12", "Completed"],
            ["98%", "Service Uptime"],
          ].map(([value, label]) => (

            <div key={label} className="bg-[#f4f3ef] p-7">

              <p className="text-4xl md:text-5xl tracking-tight">
                {value}
              </p>

              <p className="text-xs uppercase tracking-wider text-neutral-400 mt-3">
                {label}
              </p>

            </div>

          ))}

        </div>

        {/* SERVICES */}
        <section className="mt-20">

          <div className="flex justify-between items-end mb-8">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Explore
              </p>

              <h2 className="text-3xl md:text-4xl mt-2">
                Government Services
              </h2>
            </div>

            <button className="text-sm underline underline-offset-4">
              View all
            </button>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {services.map((service) => (

              <div
                key={service.number}
                className="group bg-white border border-black/10 rounded-2xl p-6 min-h-52 hover:-translate-y-2 transition duration-500"
              >

                <span className="text-xs text-neutral-400">
                  {service.number}
                </span>

                <h3 className="text-2xl mt-12">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-400 mt-3">
                  {service.desc}
                </p>

                <div className="mt-6 text-lg group-hover:translate-x-2 transition">
                  →
                </div>

              </div>

            ))}

          </div>

        </section>

        {/* APPLICATIONS */}
        <section className="mt-24">

          <div className="mb-8">

            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Activity
            </p>

            <h2 className="text-3xl md:text-4xl mt-2">
              Recent Applications
            </h2>

          </div>

          <div className="bg-white rounded-2xl border border-black/10 overflow-hidden">

            {applications.map((application, index) => (

              <div
                key={application.name}
                className={`p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 ${
                  index !== applications.length - 1
                    ? "border-b border-black/10"
                    : ""
                }`}
              >

                <div>

                  <h3 className="font-medium">
                    {application.name}
                  </h3>

                  <p className="text-sm text-neutral-400 mt-1">
                    {application.department}
                  </p>

                </div>

                <div className="flex items-center gap-8">

                  <span className="text-xs text-neutral-400">
                    {application.date}
                  </span>

                  <span
                    className={`px-4 py-2 rounded-full text-xs ${
                      application.status === "Approved"
                        ? "bg-black text-white"
                        : "bg-neutral-100"
                    }`}
                  >
                    {application.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* INTEGRATION */}
        <section className="mt-24 bg-black text-white rounded-3xl p-8 md:p-12">

          <div className="flex flex-col md:flex-row justify-between gap-10">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                System
              </p>

              <h2 className="text-4xl md:text-5xl tracking-tight mt-3">
                Connected Government
              </h2>

              <p className="text-white/50 max-w-lg mt-5 leading-7">
                Multiple departments connected through a unified
                interoperability layer.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3 min-w-[300px]">

              {["Revenue", "Education", "Transport", "Social Welfare"].map(
                (department) => (

                  <div
                    key={department}
                    className="border border-white/10 rounded-xl p-4"
                  >

                    <div className="flex items-center gap-2">

                      <span className="w-2 h-2 bg-green-400 rounded-full" />

                      <span className="text-sm">
                        Connected
                      </span>

                    </div>

                    <p className="mt-5 text-white/60 text-sm">
                      {department}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      </div>

    </main>
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