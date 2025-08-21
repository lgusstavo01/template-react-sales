import { useEffect, useRef, useState } from "react";

function FaqItem({ id, question, answer, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // anima a altura quando abre/fecha
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      const h = el.scrollHeight;
      // define 0 -> h para animar
      setHeight(0);
      requestAnimationFrame(() => setHeight(h));
    } else {
      const h = el.scrollHeight;
      // garante que a animação ocorre h -> 0
      setHeight(h);
      requestAnimationFrame(() => setHeight(0));
    }
  }, [isOpen]);

  // recalcula altura em resize quando aberto
  useEffect(() => {
    const onResize = () => {
      if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  return (
    <div className="border-t first:border-t-0 border-gray-200">
      <h3 id={`faq-head-${id}`}>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-3 p-5 text-left font-medium text-gray-800 hover:bg-gray-50"
        >
          <span>{question}</span>
          <svg
            className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 10 6"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 5 5 1 1 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </h3>

      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-head-${id}`}
        // transição suave de altura
        style={{
          height,
          overflow: "hidden",
          transition: "height 300ms ease",
        }}
      >
        <div ref={contentRef} className="px-5 pb-5 text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const items = [
    {
      q: "Lorem ipsum dolor, sit amet consectetur",
      a: (
        <>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          vel quas nostrum repellendus temporibus recusandae fugiat natus,
          laborum architecto molestias ex cum omnis reprehenderit delectus
          autem, et minus asperiores nam.
        </>
      ),
    },
    {
      q: "Lorem ipsum dolor, sit amet consectetur",
      a: (
          <>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          vel quas nostrum repellendus temporibus recusandae fugiat natus,
          laborum architecto molestias ex cum omnis reprehenderit delectus
          autem, et minus asperiores nam.
        </>
      ),
    },
    {
      q: "Lorem ipsum dolor, sit amet consectetur",
      a: (
          <>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          vel quas nostrum repellendus temporibus recusandae fugiat natus,
          laborum architecto molestias ex cum omnis reprehenderit delectus
          autem, et minus asperiores nam.
        </>
      ),
    },
    {
      q: "Lorem ipsum dolor, sit amet consectetur",
      a: (
    <>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          vel quas nostrum repellendus temporibus recusandae fugiat natus,
          laborum architecto molestias ex cum omnis reprehenderit delectus
          autem, et minus asperiores nam.
        </>
      ),
    },
    {
      q: "Lorem ipsum dolor, sit amet consectetur",
      a: (
    <>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          vel quas nostrum repellendus temporibus recusandae fugiat natus,
          laborum architecto molestias ex cum omnis reprehenderit delectus
          autem, et minus asperiores nam.
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="w-full bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-gray-900">
            Lorem ipsum
          </h2>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          {items.map((it, i) => (
            <FaqItem
              key={i}
              id={i}
              question={it.q}
              answer={it.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
