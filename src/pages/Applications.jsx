const applications = [
  {
    id: "APP-2026-0912",
    name: "Income Certificate",
    department: "Revenue Department",
    date: "24 Sep 2026",
    status: "Processing",
  },
  {
    id: "APP-2026-0847",
    name: "Domicile Certificate",
    department: "Citizen Services",
    date: "18 Sep 2026",
    status: "Approved",
  },
  {
    id: "APP-2026-0791",
    name: "Scholarship Application",
    department: "Education Department",
    date: "15 Sep 2026",
    status: "Verification",
  },
];

export default function Applications() {
  return (
    <div className="max-w-[1500px]">

      {/* HEADER */}
      <section className="mb-10">

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
          Citizen Portal
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1F33] tracking-[-0.04em] mt-3">
          My Applications
        </h1>

        <p className="mt-3 text-[#0B1F33]/50 max-w-xl leading-7">
          Track your submitted government applications and view their
          current status.
        </p>

      </section>

      {/* SUMMARY */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

        {[
          ["03", "Total Applications"],
          ["01", "Processing"],
          ["01", "Approved"],
          ["01", "Verification"],
        ].map(([number, label]) => (

          <div
            key={label}
            className="bg-white border border-[#0B1F33]/10 rounded-xl p-5"
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

      {/* APPLICATION LIST */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
              Activity
            </p>

            <h2 className="text-2xl font-semibold text-[#0B1F33] mt-2">
              Recent Applications
            </h2>
          </div>

          <button
  onClick={() => window.location.href = "/services"}
  className="bg-[#F4A340] text-[#0B1F33] px-5 py-3 rounded-lg text-sm font-bold hover:bg-[#0B1F33] hover:text-white transition"
>
  + New Application
</button>

        </div>

        <div className="bg-white border border-[#0B1F33]/10 rounded-xl overflow-hidden">

          {applications.map((application, index) => (

            <div
              key={application.id}
              className={`p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 ${
                index !== applications.length - 1
                  ? "border-b border-[#0B1F33]/10"
                  : ""
              }`}
            >

              <div>

                <div className="flex items-center gap-3">

                  <h3 className="font-semibold text-[#0B1F33]">
                    {application.name}
                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                      application.status === "Approved"
                        ? "bg-[#16834B]/10 text-[#16834B]"
                        : application.status === "Processing"
                        ? "bg-[#0B6E99]/10 text-[#0B6E99]"
                        : "bg-[#F4A340]/20 text-[#8a5a00]"
                    }`}
                  >
                    {application.status}
                  </span>

                </div>

                <p className="text-sm text-[#0B1F33]/40 mt-2">
                  {application.department}
                </p>

                <p className="text-[11px] text-[#0B1F33]/30 mt-2">
                  {application.id}
                </p>

              </div>

              <div className="flex items-center gap-6">

                <span className="text-xs text-[#0B1F33]/40">
                  {application.date}
                </span>

                <button className="text-sm font-semibold text-[#0B6E99]">
                  View →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}