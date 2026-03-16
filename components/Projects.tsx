import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto mt-32">

      <h2 className="text-4xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((p) => (
            <Link href="https://www.fiverr.com/s/ZmjRzx8" key={p.slug}>

          <div
            key={p.slug}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >

            <img src={p.image} className="w-full h-52"/>

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>
            </div>

          </div>

          </Link>

        ))}

     
      </div>

    </section>
  );
}