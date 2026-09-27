import { useState } from "react";
export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [applicationUpdates, setApplicationUpdates] = useState(true);

  return (
    <div className="max-w-[1100px]">

      {/* HEADER */}
      <section className="mb-10">

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B6E99] font-bold">
          Account
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1F33] tracking-[-0.04em] mt-3">
          Settings
        </h1>

        <p className="mt-3 text-[#0B1F33]/50 max-w-xl leading-7">
          Manage your citizen profile, preferences and platform settings.
        </p>

      </section>

      {/* PROFILE */}
      <section className="bg-white border border-[#0B1F33]/10 rounded-xl p-6 md:p-8 mb-6">

        <div className="flex items-center gap-5 mb-8">

          <div className="w-14 h-14 rounded-xl bg-[#0B6E99] text-white flex items-center justify-center font-bold">
            AD
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#0B1F33]">
              Profile Information
            </h2>

            <p className="text-sm text-[#0B1F33]/40 mt-1">
              Your citizen account details
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="text-xs text-[#0B1F33]/50">
              Full Name
            </label>

            <input
              value="Aditya Dev"
              readOnly
              className="w-full mt-2 bg-[#F5F7F8] border border-[#0B1F33]/10 rounded-lg px-4 py-3 text-sm text-[#0B1F33] outline-none"
            />
          </div>

          <div>
            <label className="text-xs text-[#0B1F33]/50">
              Account Type
            </label>

            <input
              value="Citizen"
              readOnly
              className="w-full mt-2 bg-[#F5F7F8] border border-[#0B1F33]/10 rounded-lg px-4 py-3 text-sm text-[#0B1F33] outline-none"
            />
          </div>

        </div>

      </section>

      {/* PREFERENCES */}
      <section className="bg-white border border-[#0B1F33]/10 rounded-xl p-6 md:p-8 mb-6">

        <div className="mb-7">

          <h2 className="text-xl font-semibold text-[#0B1F33]">
            Preferences
          </h2>

          <p className="text-sm text-[#0B1F33]/40 mt-1">
            Customize your portal experience
          </p>

        </div>

        <div className="space-y-5">

          <div className="flex items-center justify-between gap-5">

            <div>
              <p className="text-sm font-semibold text-[#0B1F33]">
                Email Notifications
              </p>

              <p className="text-xs text-[#0B1F33]/40 mt-1">
                Receive updates about your applications.
              </p>
            </div>

            <button
  onClick={() => setEmailNotifications(!emailNotifications)}
  className={`w-11 h-6 rounded-full p-1 transition ${
    emailNotifications
      ? "bg-[#0B6E99]"
      : "bg-[#0B1F33]/20"
  }`}
>
  <div
    className={`w-4 h-4 rounded-full bg-white transition ${
      emailNotifications ? "ml-auto" : "ml-0"
    }`}
  />
</button>

          </div>

          <div className="border-t border-[#0B1F33]/10" />

          <div className="flex items-center justify-between gap-5">

            <div>
              <p className="text-sm font-semibold text-[#0B1F33]">
                Application Updates
              </p>

              <p className="text-xs text-[#0B1F33]/40 mt-1">
                Get notified when an application status changes.
              </p>
            </div>

            <button
  onClick={() => setApplicationUpdates(!applicationUpdates)}
  className={`w-11 h-6 rounded-full p-1 transition ${
    applicationUpdates
      ? "bg-[#0B6E99]"
      : "bg-[#0B1F33]/20"
  }`}
>
  <div
    className={`w-4 h-4 rounded-full bg-white transition ${
      applicationUpdates ? "ml-auto" : "ml-0"
    }`}
  />
</button>

          </div>

        </div>

      </section>

      {/* SECURITY */}
      <section className="bg-[#0B1F33] rounded-xl p-6 md:p-8 text-white">

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#36A9C4] font-bold">
          Security
        </p>

        <h2 className="text-xl font-semibold mt-3">
          Account Security
        </h2>

        <p className="text-sm text-white/40 mt-2">
          Your account information is protected through secure platform
          practices.
        </p>

        <button className="mt-6 border border-white/15 px-5 py-3 rounded-lg text-sm hover:bg-white hover:text-[#0B1F33] transition">
          Manage Security
        </button>

      </section>

    </div>
  );
}