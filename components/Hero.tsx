export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl p-16 flex items-center justify-between">

      {/* left */}
      <div className="max-w-xl">

        <h1 className="text-6xl font-bold leading-tight">
          Building AI
          <br />
          automation systems
          <br />
          <span className="text-[var(--accent)]">
            for businesses.
          </span>
        </h1>

        <p className="text-gray-500 mt-6">
          I build AI powered automation systems for businesses using
          Make.com, Zapier and APIs. Automate emails, leads, and
          customer support with intelligent workflows.
        </p>

        {/* input + button */}

        <div className="flex mt-8 gap-4">

          <input
            placeholder="Email address"
            className="px-4 py-3 bg-gray-100 rounded-lg w-64"
          />

          <button className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg">
            Connect With Me
          </button>

        </div>

      </div>

      {/* right image */}

      <div className="hidden md:block">
        <img
          src="/profile.jpeg"
          className="w-[360px] object-cover rounded-xl"
        />
      </div>

    </section>
  );
}