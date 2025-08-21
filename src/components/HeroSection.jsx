// src/components/HeroSection.jsx
import { LeadForm } from "./LeadForm";

export function HeroSection({ bgUrl }) {
  return (
    <section
      id="home"
      className="flex items-center pt-14 xl:pl-28 justify-center min-h-screen md:min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      {/* centraliza verticalmente o conteúdo */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-0 md:min-h-screen flex items-center">
        <div className="grid w-full gap-10 md:grid-cols-2 md:items-center">
          {/* Texto (esquerda) */}
          <div className="text-white">
            <p className="text-xs tracking-widest text-white/70 uppercase">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Culpa nam itaque dolores nesciunt at
            </h1>
            <p className="mt-4 max-w-xl text-white/90 md:text-lg">
              Adipisicing elit. Culpa nam itaque dolores nesciunt at sed
              necessitatibus accusamus mollitia quia corrupti possimus debitis
              magni qui hic officia, iusto, repellendus omnis vel.
            </p>
          </div>

          {/* Form (direita). No mobile centralizado; no desktop encosta à direita */}
          <div className="justify-self-center md:justify-self-end w-full">
            <div className="w-full bg-white/90 max-w-md rounded-3xl p-6 md:p-8 shadow-2xl ring-1 ring-white/50">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
