import Image from "next/image";
import { Cta, Reveal } from "@/components/shared";

const hospitals = [
  "Hospital Federal dos Servidores do Estado",
  "Hospital Estadual Getúlio Vargas",
  "Hospital Federal da Lagoa — preceptor cirúrgico",
];

export default function Surgeon() {
  return (
    <section className="section-edge bg-secondary relative overflow-hidden lg:min-h-[820px] lg:flex lg:items-center">
      {/* Mobile: imagem acima do texto */}
      <div className="lg:hidden pt-12 flex justify-center">
        <Image
          src="/images/ian-sm.webp"
          alt="Dr. Ian Damas em centro cirúrgico"
          width={700}
          height={938}
          sizes="75vw"
          className="w-3/4 h-auto block"
        />
      </div>

      {/* halo atrás da foto */}
      <div className="pointer-events-none absolute left-[-8%] top-1/4 h-[560px] w-[560px] rounded-full bg-tertiary/20 blur-[120px]" />

      {/* Desktop: imagem na altura total da seção */}
      <div className="hidden lg:block absolute left-[3%] top-0 h-full w-[44%]">
        <Image
          src="/images/ian.webp"
          alt="Dr. Ian Damas em centro cirúrgico"
          fill
          sizes="44vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-24">
        <Reveal className="lg:ml-auto lg:w-[46%] flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
          <div>
            <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight text-primary leading-tight tracking-tight">
              Por que sou o cirurgião{" "}
              <span className="text-gold">indicado para o seu caso?</span>
            </h2>
            <p className="text-primary/50 text-xs font-medium tracking-wide mt-3">
              CRM-RJ 1135430 – RQE N° 49458 – RQE N° 5150
            </p>
          </div>

          <p className="text-primary/80 text-sm lg:text-base leading-relaxed">
            Me chamo Dr. Ian Damas, sou Cirurgião Geral e do Aparelho Digestivo com{" "}
            <span className="text-tertiary font-semibold">8 anos de experiência</span> em
            procedimentos de alta complexidade. Com formação e forte atuação na linha de
            frente de centros de referência, como o Hospital Federal dos Servidores do
            Estado, o Hospital Estadual Getúlio Vargas e atuando como preceptor cirúrgico
            no Hospital Federal da Lagoa, especializei-me no trauma e na Videolaparoscopia
            Avançada.
          </p>
          <p className="text-primary/80 text-sm lg:text-base leading-relaxed">
            Já atendi vários atletas que buscam segurança e alta performance, pois acredito
            que cuidar do corpo é garantir que sua base biomecânica seja estruturada e forte
            o suficiente para suportar o esforço máximo do treino sem risco de lesões.
          </p>

          <ul className="w-full flex flex-col divide-y divide-primary/15 border border-primary/15 rounded-2xl text-left mt-2">
            {hospitals.map((h) => (
              <li key={h} className="flex items-center gap-4 px-5 py-4 text-primary font-bold text-sm">
                <span className="w-3 h-px bg-tertiary flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <Cta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
