import { useState, useEffect } from "react";
import { MenuLinks } from "./MenuLinks";
import { menuItems } from "../data/MenuItems.js";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [])

  useEffect(() => {
    // 1. Função que reage ao pressionar de teclas
    const onKey = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    // 2. Adiciona o listener de teclado
    document.addEventListener("keydown", onKey);

    // 3. Bloqueia ou libera o scroll da página
    document.body.style.overflow = isOpen ? "hidden" : "";

    // 4. Limpeza: remove o listener e reseta o overflow
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]); // <= dependência

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Example
          </span>
        </a>

        {/* Botões à direita */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            href="#"
          >
            Entrar em contato
          </a>

          {/* Botão toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Abrir o menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <button
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
          />
        )}

        {/* Menu com animação */}
        <div
          id="navbar-sticky"
          className={`z-50 w-full md:flex md:w-auto md:order-1 items-center justify-between overflow-hidden transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "max-h-96 w-full opacity-100 translate-y-0"
                : " max-h-0 opacity-0 -translate-y-4"
            }
            md:max-h-full md:opacity-100 md:translate-y-0`}
        >
          <MenuLinks items={menuItems} onItemClick={() => setIsOpen(false)} currentHash={hash} />
        </div>
      </div>
    </nav>
  );
}
