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
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = services.filter((service) =>
    `${service.title} ${service.description} ${service.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* APPLICATION FORM */
  if (selectedService) {
    return (
      <div className="max-w-[1000px]">

        {/* BACK */}
        <button
          onClick={() => setSelectedService(null)}
          className="text-sm text-[#3A506B] hover:text-[#0B132B] mb-8"
        >
          ← Back to Services
        </button>

        {/* HEADER */}
        <section className="mb-8">

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#3A506B] font-bold">
            New Application
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#0B132B] tracking-[-0.04em] mt-3">
            {selectedService.title}
          </h1>

          <p className="mt-3 text-[#0B132B]/50 max-w-xl leading-7">
            Submit your details to apply for this government service.
          </p>

        </section>


        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Application submitted successfully!");
          }}
          className="bg-white border border-[#0B132B]/10 rounded-2xl p-6 md:p-8"
        >

          <div className="mb-8 pb-6 border-b border-[#0B132B]/10">

            <p className="text-xs text-[#0B132B]/40">
              Department
            </p>

            <p className="text-sm font-semibold text-[#0B132B] mt-1">
              {selectedService.department}
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-6">

            {/* NAME */}
            <div>
              <label className="text-xs font-semibold text-[#0B132B]">
                Full Name
              </label>

              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full mt-2 bg-[#F8FBFB] border border-[#0B132B]/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#3A506B]"
              />
            </div>


            {/* MOBILE */}
            <div>
              <label className="text-xs font-semibold text-[#0B132B]">
                Mobile Number
              </label>

              <input
                type="tel"
                required
                placeholder="Enter mobile number"
                className="w-full mt-2 bg-[#F8FBFB] border border-[#0B132B]/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#3A506B]"
              />
            </div>


            {/* EMAIL */}
            <div>
              <label className="text-xs font-semibold text-[#0B132B]">
                Email Address
              </label>

              <input
                type="email"
                required
                placeholder="Enter email address"
                className="w-full mt-2 bg-[#F8FBFB] border border-[#0B132B]/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#3A506B]"
              />
            </div>


            {/* AADHAAR */}
            <div>
              <label className="text-xs font-semibold text-[#0B132B]">
                Aadhaar Number
              </label>

              <input
                type="text"
                required
                placeholder="Enter Aadhaar number"
                maxLength="12"
                className="w-full mt-2 bg-[#F8FBFB] border border-[#0B132B]/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#3A506B]"
              />
            </div>


            {/* ADDRESS */}
            <div className="md:col-span-2">

              <label className="text-xs font-semibold text-[#0B132B]">
                Address
              </label>

              <textarea
                required
                rows="4"
                placeholder="Enter your address"
                className="w-full mt-2 bg-[#F8FBFB] border border-[#0B132B]/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#3A506B] resize-none"
              />

            </div>

          </div>


          {/* DOCUMENT */}
          <div className="mt-8 pt-6 border-t border-[#0B132B]/10">

            <label className="text-xs font-semibold text-[#0B132B]">
              Supporting Document
            </label>

            <input
              type="file"
              required
              className="w-full mt-2 text-sm text-[#0B132B]/50"
            />

            <p className="text-[11px] text-[#0B132B]/35 mt-2">
              Upload a relevant supporting document.
            </p>

          </div>


          {/* SUBMIT */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">

            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="px-6 py-3 rounded-lg text-sm font-semibold text-[#0B132B]/60 hover:bg-[#F8FBFB]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#3A506B] text-white px-7 py-3 rounded-lg text-sm font-bold hover:bg-[#0B132B] transition"
            >
              Submit Application →
            </button>

          </div>

        </form>

      </div>
    );
  }


  /* SERVICES PAGE */
  return (
    <div className="max-w-[1500px]">

      {/* HEADER */}
      <section className="mb-10">

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#3A506B] font-bold">
          Citizen Portal
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

          <div>

            <h1 className="text-4xl md:text-5xl font-semibold text-[#0B132B] tracking-[-0.04em] mt-3">
              Government Services
            </h1>

            <p className="mt-3 text-[#0B132B]/50 max-w-xl leading-7">
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
              className="w-full bg-white border border-[#0B132B]/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#3A506B]"
            />

          </div>

        </div>

      </section>


      {/* SERVICE COUNT */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">

        <div className="bg-[#0B132B] text-white rounded-xl p-5">
          <p className="text-3xl font-semibold">24</p>

          <p className="text-xs text-white/40 mt-2">
            Available Services
          </p>
        </div>


        <div className="bg-white border border-[#0B132B]/10 rounded-xl p-5">

          <p className="text-3xl font-semibold text-[#0B132B]">
            12
          </p>

          <p className="text-xs text-[#0B132B]/40 mt-2">
            Connected Departments
          </p>

        </div>


        <div className="bg-white border border-[#0B132B]/10 rounded-xl p-5">

          <p className="text-3xl font-semibold text-[#0B132B]">
            01
          </p>

          <p className="text-xs text-[#0B132B]/40 mt-2">
            Unified Gateway
          </p>

        </div>

      </section>


      {/* SERVICES GRID */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#3A506B] font-bold">
              Explore
            </p>

            <h2 className="text-2xl font-semibold text-[#0B132B] mt-2">
              All Services
            </h2>

          </div>

          <span className="text-xs text-[#0B132B]/40">
            {filteredServices.length} categories
          </span>

        </div>


        {filteredServices.length === 0 ? (

          <div className="bg-white border border-[#0B132B]/10 rounded-xl p-10 text-center">

            <p className="text-lg font-semibold text-[#0B132B]">
              No services found
            </p>

            <p className="text-sm text-[#0B132B]/40 mt-2">
              Try searching with a different keyword.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

            {filteredServices.map((service) => (

              <div
                key={service.no}
                className="group bg-white border border-[#0B132B]/10 rounded-xl p-6 hover:border-[#5BC0BE]/60 hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs font-bold text-[#3A506B]">
                    {service.no}
                  </span>

                  <span className="text-[10px] px-2 py-1 rounded-full bg-[#5BC0BE]/15 text-[#3A506B] font-semibold">
                    {service.status}
                  </span>

                </div>


                <h3 className="text-xl font-semibold text-[#0B132B] mt-8">
                  {service.title}
                </h3>


                <p className="text-sm text-[#0B132B]/45 mt-3 leading-6">
                  {service.description}
                </p>


                <div className="mt-6 pt-4 border-t border-[#0B132B]/10 flex items-center justify-between">

                  <span className="text-[11px] text-[#0B132B]/40">
                    {service.department}
                  </span>


                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-sm font-semibold text-[#3A506B] group-hover:translate-x-1 transition"
                  >
                    Explore →
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}