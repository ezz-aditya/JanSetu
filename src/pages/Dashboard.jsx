
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
                    Welcome back,
                    <br />
                    Aditya.
                  </h1>

                  <p className="mt-5 text-white/45 max-w-xl leading-7">
                    Manage government services, applications and documents
                    from one connected portal.
                  </p>

                </div>

                <button className="bg-[#F4A340] text-[#0B1F33] px-6 py-3 rounded-lg font-bold w-fit hover:bg-white transition">
                  + New Application
                </button>

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

              <button className="text-sm text-[#0B6E99] font-semibold">
                View all →
              </button>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

              {services.map((service) => (

                <button
                  key={service.no}
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

            <div className="mb-6">

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
                Activity
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                Recent Applications
              </h2>

            </div>

            <div className="bg-white border border-[#0B1F33]/10 rounded-xl overflow-hidden">

              {applications.map((application, index) => (

                <div
                  key={application.name}
                  className={`p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 ${
                    index !== applications.length - 1
                      ? "border-b border-[#0B1F33]/10"
                      : ""
                  }`}
                >

                  <div>

                    <h3 className="font-semibold text-[#0B1F33]">
                      {application.name}
                    </h3>

                    <p className="text-sm text-[#0B1F33]/40 mt-1">
                      {application.department}
                    </p>

                  </div>

                  <div className="flex items-center gap-6">

                    <span className="text-xs text-[#0B1F33]/35">
                      {application.date}
                    </span>

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        application.status === "Approved"
                          ? "bg-[#16834B] text-white"
                          : application.status === "Processing"
                          ? "bg-[#0B6E99] text-white"
                          : "bg-[#F4A340] text-[#0B1F33]"
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
          <section className="mt-12 bg-[#0B1F33] rounded-2xl p-7 md:p-9 text-white">

            <div className="flex flex-col xl:flex-row justify-between gap-8">

              <div>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#36A9C4] font-bold">
                  Interoperability Layer
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold mt-3">
                  Connected Government
                </h2>

                <p className="text-sm text-white/40 max-w-md mt-3 leading-6">
                  Overview of connected government departments and
                  digital platforms.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-3 xl:min-w-[400px]">

                {[
                  "Revenue",
                  "Education",
                  "Transport",
                  "Social Welfare",
                ].map((department) => (

                  <div
                    key={department}
                    className="border border-white/10 rounded-lg p-4"
                  >

                    <div className="flex items-center gap-2">

                      <span className="w-2 h-2 rounded-full bg-[#36A9C4]" />

                      <span className="text-[10px] text-white/40">
                        Connected
                      </span>

                    </div>

                    <p className="text-sm mt-3">
                      {department}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </section>

    </div>
  );
}