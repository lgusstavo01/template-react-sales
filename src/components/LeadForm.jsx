import { useState } from "react";

// ===== Helpers de formatação =====
const onlyDigits = (s) => s.replace(/\D/g, "");

// (75) 9xxxx-xxxx  | também aceita fixo (sem 9)
function formatPhoneBR(v) {
  const d = onlyDigits(v).slice(0, 11); // dd + 9 + 8
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
}

// 00000-000
function formatCEP(v) {
  const d = onlyDigits(v).slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0, 5)}-${d.slice(5)}`;
}

// Normaliza número para wa.me
// Ex.: "75 8192-3016" -> "5575981923016" (se faltar o 9, adiciono)
function normalizeWhatsNumber(raw) {
  let d = onlyDigits(raw);
  if (!d.startsWith("55")) d = "55" + d; // país
  // se depois de 55 tiver 10 dígitos (dd + 8), adiciona "9" de celular
  const after55 = d.slice(2);
  if (after55.length === 10) {
    d = "55" + after55.slice(0, 2) + "9" + after55.slice(2);
  }
  return d;
}

// ===== Componente =====
export function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    cep: "",
  });

  const 
  handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "whatsapp") {
      setForm((s) => ({ ...s, whatsapp: formatPhoneBR(value) }));
    } else if (id === "cep") {
      setForm((s) => ({ ...s, cep: formatCEP(value) }));
    } else {
      setForm((s) => ({ ...s, [id]: value }));
    }
  };

  // >>> coloque aqui o número de atendimento
  const ATTENDANT_NUMBER_RAW = "99 9999-9999"; // como você me passou
  const waNumber = normalizeWhatsNumber(ATTENDANT_NUMBER_RAW);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Monta a mensagem
    const msg =
      `*Solicitação de Contato - Alunil*\n\n` +
      ` *Nome:* ${form.name}\n` +
      ` *Email:* ${form.email}\n` +
      ` *WhatsApp:* ${form.whatsapp}\n` +
      ` *CEP:* ${form.cep}\n\n` +
      `Olá, vim através do site e gostaria de realizar um orçamento!`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  // Estilos (inputs pill e foco azul)
  const inputCls =
    "w-full h-12 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 " +
    "px-4 text-sm shadow-sm ring-1 ring-inset ring-gray-200 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-600 transition";

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
          Seu nome
        </label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          value={form.name}
          onChange={handleChange}
          className={inputCls}
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Seu e-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={form.email}
          onChange={handleChange}
          className={inputCls}
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-gray-900">
          Digite seu WhatsApp
        </label>
        <input
          id="whatsapp"
          type="tel"
          placeholder="(75) 9xxxx-xxxx"
          value={form.whatsapp}
          onChange={handleChange}
          className={inputCls}
          inputMode="tel"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="cep" className="block mb-2 text-sm font-medium text-gray-900">
          Digite seu CEP
        </label>
        <input
          id="cep"
          type="text"
          placeholder="00000-000"
          value={form.cep}
          onChange={handleChange}
          className={inputCls}
          inputMode="numeric"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full h-12 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Enviar pelo WhatsApp
      </button>

      <p className="mt-3 text-xs text-gray-500">
        Ao enviar você concorda com nossa{" "}
        <a href="#" className="underline text-blue-600 hover:text-blue-700">
          Política de Privacidade
        </a>.
      </p>
    </form>
  );
}
