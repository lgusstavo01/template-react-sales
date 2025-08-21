import { products } from "../data/products";

export function ProductsGrid() {
  // número de atendimento (normalizado para wa.me) → altere se precisar
  const waNumber = "5575981923016";

  return (
    <section id="products" className="relative w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Lorem ipsum dolor sit amet
          </p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-gray-900">
            Culpa nam itaque dolores nesciunt at{" "}
            <span className="text-blue-600">lorem ipsum</span>
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Adipisicing elit. Culpa nam itaque dolores nesciunt at sed
            necessitatibus accusamus mollitia quia corrupti possimus debitis
            magni qui hic officia, iusto, repellendus omnis vel.
          </p>
        </div>

        {/* Grid 1 → 2 → 3 colunas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {products.map((p) => {
            const msg =
              `Olá! Tenho interesse em realizar um orçamento do produto: *${p.title}*.` +
              `\nPode me ajudar?`;
            const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
              msg
            )}`;

            return (
              <article
                key={p.title}
                className="group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm
                           transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* Imagem */}
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{p.desc}</p>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    {/* Wrapper = a borda em gradiente */}
                    <span
                      className="
      inline-flex rounded-lg p-[2px]
      bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500
      [background-size:300%_300%]
      animate-[gradientMove_3s_linear_infinite]
      transition-transform duration-300 group-hover:scale-[1.02]
    "
                    >
                      {/* Botão real */}
                      <span
                        className="
        inline-flex items-center gap-2 rounded-md
        bg-blue-600 px-4 py-2 text-sm font-semibold text-white
        shadow-sm transition-colors duration-300
        group-hover:bg-blue-700
      "
                      >
                        Lorem ipsum
                        <svg
                          className="h-4 w-4 rtl:rotate-180"
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
                      </span>
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
