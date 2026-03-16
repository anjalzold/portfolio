export default function About() {
  return (
    <section className="max-w-6xl mx-auto mt-32 grid md:grid-cols-2 gap-16">

      <div>
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-600 leading-relaxed">
          I am a Computer Science graduate (BCA) focused on
          building automation systems using AI tools and APIs.
        </p>

        <p className="text-gray-600 mt-4">
          My goal is to help businesses automate repetitive
          processes like email management, lead generation,
          and customer support.
        </p>
      </div>

      <div className="bg-white p-10 rounded-xl shadow-sm">

        <h3 className="text-xl font-semibold mb-6">
          Tools I Use
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-gray-100 p-3 rounded-lg">Make.com</div>
          <div className="bg-gray-100 p-3 rounded-lg">Zapier</div>
          <div className="bg-gray-100 p-3 rounded-lg">Airtable</div>
          <div className="bg-gray-100 p-3 rounded-lg">Next.js</div>
          <div className="bg-gray-100 p-3 rounded-lg">OpenAI API</div>
          <div className="bg-gray-100 p-3 rounded-lg">Automation</div>

        </div>

      </div>

    </section>
  );
}