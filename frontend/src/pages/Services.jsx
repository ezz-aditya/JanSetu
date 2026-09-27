import { useState } from "react";
const services = [
  {
    no: "01",
    title: "Certificates",
    description:
      "Apply for income, domicile, caste and other essential government certificates.",
    department: "Revenue Department",
    status: "Available",
  },
  {
    no: "02",
    title: "Citizen Services",
    description:
      "Access essential public services from multiple government departments.",
    department: "Citizen Services",
    status: "Available",
  },
  {
    no: "03",
    title: "Schemes & Benefits",
    description:
      "Discover government schemes, subsidies and benefits you may be eligible for.",
    department: "Social Welfare",
    status: "Available",
  },
  {
    no: "04",
    title: "Applications",
    description:
      "Track the status of your submitted government applications in one place.",
    department: "Integrated Services",
    status: "Available",
  },
  {
    no: "05",
    title: "Education",
    description:
      "Access scholarships, certificates and other education-related services.",
    department: "Education Department",
    status: "Available",
  },
  {
    no: "06",
    title: "Transport",
    description:
      "Access transport-related services and government facilities.",
    department: "Transport Department",
    status: "Available",
  },
];

export default function Services() {
  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) =>
    `${service.title} ${service.description} ${service.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1500px]">

      {/* HEADER */}
      <section className="mb-10">

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
          Citizen Portal
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

          <div>

            <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1F33] tracking-[-0.04em] mt-3">
              Government Services
            </h1>

            <p className="mt-3 text-[#0B1F33]/50 max-w-xl leading-7">
              Access services from multiple government departments through
              one connected digital platform.
            </p>

          </div>

          {/* SEARCH */}
          <div className="w-full lg:w-[320px]">

            <input
  type="text"
  placeholder="Search services..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full bg-white border border-[#0B1F33]/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0B6E99]"
/>

          </div>

        </div>

      </section>

      {/* SERVICE COUNT */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">

        <div className="bg-[#0B1F33] text-white rounded-xl p-5">
          <p className="text-3xl font-semibold">24</p>
          <p className="text-xs text-white/40 mt-2">
            Available Services
          </p>
        </div>

        <div className="bg-white border border-[#0B1F33]/10 rounded-xl p-5">
          <p className="text-3xl font-semibold text-[#0B1F33]">12</p>
          <p className="text-xs text-[#0B1F33]/40 mt-2">
            Connected Departments
          </p>
        </div>

        <div className="bg-white border border-[#0B1F33]/10 rounded-xl p-5">
          <p className="text-3xl font-semibold text-[#0B1F33]">01</p>
          <p className="text-xs text-[#0B1F33]/40 mt-2">
            Unified Gateway
          </p>
        </div>

      </section>

      {/* SERVICES GRID */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
              Explore
            </p>

            <h2 className="text-2xl font-semibold text-[#0B1F33] mt-2">
              All Services
            </h2>
          </div>

          <span className="text-xs text-[#0B1F33]/40">
            6 categories
          </span>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

          {filteredServices.map((service) => (

            <div
              key={service.no}
              className="group bg-white border border-[#0B1F33]/10 rounded-xl p-6 hover:border-[#0B6E99]/40 hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs font-bold text-[#0B6E99]">
                  {service.no}
                </span>

                <span className="text-[10px] px-2 py-1 rounded-full bg-[#16834B]/10 text-[#16834B] font-semibold">
                  {service.status}
                </span>

              </div>

              <h3 className="text-xl font-semibold text-[#0B1F33] mt-8">
                {service.title}
              </h3>

              <p className="text-sm text-[#0B1F33]/45 mt-3 leading-6">
                {service.description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#0B1F33]/10 flex items-center justify-between">

                <span className="text-[11px] text-[#0B1F33]/40">
                  {service.department}
                </span>

                <button className="text-sm font-semibold text-[#0B6E99] group-hover:translate-x-1 transition">
                  Explore →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}