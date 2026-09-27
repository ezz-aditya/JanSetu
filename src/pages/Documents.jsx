import { useRef } from "react";
const documents = [
  {
    name: "Income Certificate",
    type: "Certificate",
    issuedBy: "Revenue Department",
    date: "24 Sep 2026",
    status: "Verified",
  },
  {
    name: "Domicile Certificate",
    type: "Certificate",
    issuedBy: "Citizen Services",
    date: "18 Sep 2026",
    status: "Verified",
  },
  {
    name: "Scholarship Document",
    type: "Education",
    issuedBy: "Education Department",
    date: "15 Sep 2026",
    status: "Pending",
  },
];

export default function Documents() {
  const fileInputRef = useRef(null);

  return (
    <div className="max-w-[1500px]">

      {/* HEADER */}
      <section className="mb-10">

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
          Citizen Portal
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1F33] tracking-[-0.04em] mt-3">
          My Documents
        </h1>

        <p className="mt-3 text-[#0B1F33]/50 max-w-xl leading-7">
          View and manage documents issued through connected government
          services.
        </p>

      </section>

      {/* SUMMARY */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">

        <div className="bg-[#0B1F33] text-white rounded-xl p-5">
          <p className="text-3xl font-semibold">03</p>
          <p className="text-xs text-white/40 mt-2">
            Total Documents
          </p>
        </div>

        <div className="bg-white border border-[#0B1F33]/10 rounded-xl p-5">
          <p className="text-3xl font-semibold text-[#16834B]">02</p>
          <p className="text-xs text-[#0B1F33]/40 mt-2">
            Verified
          </p>
        </div>

        <div className="bg-white border border-[#0B1F33]/10 rounded-xl p-5">
          <p className="text-3xl font-semibold text-[#F4A340]">01</p>
          <p className="text-xs text-[#0B1F33]/40 mt-2">
            Pending
          </p>
        </div>

      </section>

      {/* DOCUMENTS */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
              Digital Records
            </p>

            <h2 className="text-2xl font-semibold text-[#0B1F33] mt-2">
              Available Documents
            </h2>
          </div>

          <input
  ref={fileInputRef}
  type="file"
  className="hidden"
/>

<button
  onClick={() => fileInputRef.current.click()}
  className="bg-[#0B6E99] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#0B1F33] transition"
>
  Upload Document
</button>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

          {documents.map((document) => (

            <div
              key={document.name}
              className="bg-white border border-[#0B1F33]/10 rounded-xl p-6 hover:border-[#0B6E99]/40 transition"
            >

              <div className="flex items-start justify-between">

                <div className="w-11 h-11 rounded-lg bg-[#0B6E99]/10 text-[#0B6E99] flex items-center justify-center font-bold">
                  DOC
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                    document.status === "Verified"
                      ? "bg-[#16834B]/10 text-[#16834B]"
                      : "bg-[#F4A340]/20 text-[#8a5a00]"
                  }`}
                >
                  {document.status}
                </span>

              </div>

              <h3 className="text-lg font-semibold text-[#0B1F33] mt-7">
                {document.name}
              </h3>

              <p className="text-sm text-[#0B1F33]/40 mt-2">
                {document.type}
              </p>

              <div className="border-t border-[#0B1F33]/10 mt-5 pt-4">

                <p className="text-[11px] text-[#0B1F33]/35">
                  Issued by
                </p>

                <p className="text-sm text-[#0B1F33] mt-1">
                  {document.issuedBy}
                </p>

                <div className="flex items-center justify-between mt-4">

                  <span className="text-[11px] text-[#0B1F33]/35">
                    {document.date}
                  </span>

                  <button className="text-sm font-semibold text-[#0B6E99]">
                    View →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}