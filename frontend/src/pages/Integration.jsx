const departments = [
  {
    name: "Revenue Department",
    services: "Certificates & Land Records",
    status: "Connected",
  },
  {
    name: "Education Department",
    services: "Scholarships & Student Services",
    status: "Connected",
  },
  {
    name: "Transport Department",
    services: "Transport & Licensing",
    status: "Connected",
  },
  {
    name: "Social Welfare Department",
    services: "Welfare Schemes & Benefits",
    status: "Connected",
  },
];

const integrationSteps = [
  {
    no: "01",
    title: "Data Ingestion",
    description: "Government platforms connect through APIs and secure data exchange.",
  },
  {
    no: "02",
    title: "Standardization",
    description: "Different data formats are validated and converted into a common structure.",
  },
  {
    no: "03",
    title: "Unified Gateway",
    description: "The integration layer enables services to communicate through standardized interfaces.",
  },
  {
    no: "04",
    title: "Citizen Access",
    description: "Citizens access connected services through one digital experience.",
  },
];

export default function Integration() {
  return (
    <div className="max-w-[1500px]">

      {/* HEADER */}
      <section className="mb-10">

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
          System Integration
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1F33] tracking-[-0.04em] mt-3">
          Connected Government
        </h1>

        <p className="mt-3 text-[#0B1F33]/50 max-w-2xl leading-7">
          A common interoperability layer connecting government departments,
          digital platforms and citizen services.
        </p>

      </section>

      {/* SYSTEM STATUS */}
      <section className="bg-[#0B1F33] rounded-2xl p-7 md:p-9 text-white mb-10">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

          <div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#36A9C4] font-bold">
              Platform Status
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-3">
              All systems operational
            </h2>

            <p className="text-sm text-white/40 mt-3">
              Connected government platforms are available through the
              unified integration layer.
            </p>

          </div>

          <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-lg">

            <span className="w-3 h-3 rounded-full bg-[#16834B]" />

            <span className="text-sm">
              Operational
            </span>

          </div>

        </div>

      </section>

      {/* DEPARTMENTS */}
      <section className="mb-12">

        <div className="mb-6">

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
            Connected Systems
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1F33] mt-2">
            Government Departments
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-4">

          {departments.map((department) => (

            <div
              key={department.name}
              className="bg-white border border-[#0B1F33]/10 rounded-xl p-6"
            >

              <div className="flex items-start justify-between gap-4">

                <div>

                  <h3 className="font-semibold text-[#0B1F33]">
                    {department.name}
                  </h3>

                  <p className="text-sm text-[#0B1F33]/40 mt-2">
                    {department.services}
                  </p>

                </div>

                <span className="flex items-center gap-2 text-[10px] text-[#16834B] font-semibold">

                  <span className="w-2 h-2 rounded-full bg-[#16834B]" />

                  {department.status}

                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* INTEGRATION FLOW */}
      <section>

        <div className="mb-6">

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
            Integration Architecture
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1F33] mt-2">
            How the platform connects systems
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          {integrationSteps.map((step) => (

            <div
              key={step.no}
              className="bg-white border border-[#0B1F33]/10 rounded-xl p-6"
            >

              <span className="text-xs font-bold text-[#0B6E99]">
                {step.no}
              </span>

              <h3 className="text-lg font-semibold text-[#0B1F33] mt-7">
                {step.title}
              </h3>

              <p className="text-sm text-[#0B1F33]/45 mt-3 leading-6">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}