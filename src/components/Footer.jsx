export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 lg:py-12">
        {/* GRID 1 -> 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Coluna 1 — Logo + Contatos */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src="./vite.svg" className="h-8" alt="Logo Example" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Example
              </span>
            </a>

            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Contatos
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-2">
              <li>
                <a href="tel:+5575999999999" className="hover:underline">
                  (75) 9 9999-9999
                </a>
              </li>
              <li>
                <a href="mailto:teste@gmail.com" className="hover:underline">
                  teste@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 2 — Como chegar (mapa responsivo) */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Como chegar
            </h2>

            {/* Wrapper responsivo 16:9 */}
            <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700">
              {/* 16:9 => 56.25% */}
              <div className="pt-[56.25%]" />
              <iframe
                title="Mapa"
                className="absolute inset-0 h-full w-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99579.37400557208!2d-9.1597358!3d38.74407945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1755735633409!5m2!1spt-BR!2sbr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              lgustavo
            </a>
            . Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
