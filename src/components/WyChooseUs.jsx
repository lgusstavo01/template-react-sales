import { whyChooseUsItems } from "../data/whyChooseUsItems";

export function WhyChooseUs() {
  return (
    <section id="about" className="relative w-full bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        {/* Headline */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Lorem Ipsum?
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl dark:text-white">
            Culpa nam itaque dolores nesciunt at,{" "}
            <span className="text-blue-600">Lorem ipsum</span>
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-300">
            Culpa nam itaque dolores nesciunt at
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsItems.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              {/* badge/icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-100 text-lime-600 ring-1 ring-lime-200 transition group-hover:scale-105 dark:bg-lime-200/20 dark:text-lime-400 dark:ring-lime-300/30">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>

              {/* underline decorativa */}
              <span className="mt-2 block h-0.5 w-10 rounded bg-gray-300 transition group-hover:w-16 group-hover:bg-blue-600 dark:bg-gray-600"></span>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {desc}
              </p>

              {/* efeito sutil de gradiente ao hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-600/0 via-blue-600/5 to-blue-600/0" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
