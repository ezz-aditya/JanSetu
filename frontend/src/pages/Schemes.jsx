const schemes = [
  {
    no: "01",
    title: "Student Scholarship",
    description:
      "Financial assistance and scholarship support for eligible students.",
    department: "Education Department",
    eligibility: "Students",
  },
  {
    no: "02",
    title: "Skill Development",
    description:
      "Training and skill development opportunities for citizens.",
    department: "Skill Development",
    eligibility: "Youth & Job Seekers",
  },
  {
    no: "03",
    title: "Social Welfare",
    description:
      "Access welfare programs and support services for eligible citizens.",
    department: "Social Welfare Department",
    eligibility: "Eligible Citizens",
  },
  {
    no: "04",
    title: "Employment Support",
    description:
      "Government initiatives supporting employment and career opportunities.",
    department: "Employment Department",
    eligibility: "Job Seekers",
  },
];

export default function Schemes() {
  return (
    <div className="max-w-[1500px]">

      {/* HEADER */}
      <section className="mb-10">

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
          Citizen Benefits
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1F33] tracking-[-0.04em] mt-3">
          Schemes & Benefits
        </h1>

        <p className="mt-3 text-[#0B1F33]/50 max-w-xl leading-7">
          Discover government schemes and benefits available through
          connected departments.
        </p>

      </section>

      {/* INFO */}
      <section className="bg-[#0B1F33] rounded-2xl p-7 md:p-9 text-white mb-10">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

          <div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#36A9C4] font-bold">
              Unified Access
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-3">
              Find benefits you may be eligible for.
            </h2>

            <p className="text-sm text-white/40 mt-3 max-w-xl leading-6">
              Government schemes from multiple departments are brought
              together through one connected platform.
            </p>

          </div>

          <button className="bg-[#F4A340] text-[#0B1F33] px-6 py-3 rounded-lg font-bold w-fit">
            Check Eligibility
          </button>

        </div>

      </section>

      {/* SCHEMES */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
              Explore
            </p>

            <h2 className="text-2xl font-semibold text-[#0B1F33] mt-2">
              Available Schemes
            </h2>

          </div>

          <span className="text-xs text-[#0B1F33]/40">
            4 programs
          </span>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          {schemes.map((scheme) => (

            <div
              key={scheme.no}
              className="bg-white border border-[#0B1F33]/10 rounded-xl p-6 hover:border-[#0B6E99]/40 hover:-translate-y-1 transition-all duration-300"
            >

              <span className="text-xs font-bold text-[#0B6E99]">
                {scheme.no}
              </span>

              <h3 className="text-xl font-semibold text-[#0B1F33] mt-8">
                {scheme.title}
              </h3>

              <p className="text-sm text-[#0B1F33]/45 mt-3 leading-6">
                {scheme.description}
              </p>

              <div className="border-t border-[#0B1F33]/10 mt-6 pt-4">

                <p className="text-[10px] uppercase tracking-wider text-[#0B1F33]/30">
                  Department
                </p>

                <p className="text-sm text-[#0B1F33] mt-1">
                  {scheme.department}
                </p>

                <p className="text-[10px] uppercase tracking-wider text-[#0B1F33]/30 mt-4">
                  Eligibility
                </p>

                <p className="text-sm text-[#0B1F33] mt-1">
                  {scheme.eligibility}
                </p>

              </div>

              <button className="mt-6 text-sm font-semibold text-[#0B6E99]">
                View Details →
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}