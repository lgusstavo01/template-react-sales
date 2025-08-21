import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Lorem ipsum
          </p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-gray-900">
            lorem <span className="text-blue-600">Ipsum</span>, Culpa nam itaque
            dolores nesciunt at
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Adipisicing elit. Culpa nam itaque dolores nesciunt at sed
            necessitatibus accusamus mollitia quia corrupti possimus debitis
            magni qui hic officia, iusto, repellendus omnis vel.
          </p>
        </div>

        {/* Grid 1→2→3 colunas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
                         transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* quote mark */}
              <div className="absolute -right-3 -top-3 rounded-xl bg-blue-600/10 p-2 text-blue-600">
                <Quote className="h-5 w-5" />
              </div>

              {/* header */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </h3>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* stars */}
              <div className="mt-4 flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating ? "fill-yellow-400" : "opacity-30"
                    }`}
                  />
                ))}
              </div>

              {/* text */}
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                “{t.text}”
              </p>

              {/* underline ao hover */}
              <span className="mt-4 block h-0.5 w-10 rounded bg-gray-200 transition group-hover:w-16 group-hover:bg-blue-600" />
            </article>
          ))}
        </div>

        {/* CTA opcional no final */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/5575981923016?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white
                       shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Lorem ipsum
            <svg
              className="h-4 w-4"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 5h12m0 0L9 1m4 4L9 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
