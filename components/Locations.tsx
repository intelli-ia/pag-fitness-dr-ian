import { Cta, NumberRule, Reveal, SpotCard } from "@/components/shared";

const locations = [
  {
    name: "Rio de Janeiro (Tijuca)",
    schedule: "Terças-feiras, das 14h às 18h30",
    address: "R. Desembargador Izidro, 18, Sala 302",
    map: "https://www.google.com/maps/search/?api=1&query=R.+Desembargador+Izidro,+18,+Tijuca,+Rio+de+Janeiro",
  },
  {
    name: "Niterói (Icaraí)",
    schedule: "Sextas-feiras, das 14h às 18h30",
    address: "Rua Mariz e Barros, 550",
    map: "https://www.google.com/maps/search/?api=1&query=Rua+Mariz+e+Barros,+550,+Icara%C3%AD,+Niter%C3%B3i",
  },
];

export default function Locations() {
  return (
    <section id="locais" className="section-edge bg-secondary bg-stripes py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight text-primary">
            Onde eu <span className="text-gold">atendo</span>
          </h2>
          <p className="text-primary/60 text-sm lg:text-base mt-3 max-w-xl mx-auto">
            Estrutura de ponta e consultórios bem localizados para facilitar o seu acesso:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {locations.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <SpotCard className="bg-primary rounded-2xl p-7 lg:p-10 gap-4 h-full">
                <NumberRule n={i + 1} />
                <h3 className="text-tertiary font-bold text-xl lg:text-2xl leading-snug">
                  {l.name}
                </h3>
                <p className="text-secondary font-semibold text-sm lg:text-base">{l.schedule}</p>
                <p className="text-secondary/65 text-sm leading-relaxed">{l.address}</p>
                <a
                  href={l.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-white bg-green-600 border border-green-600 rounded-full px-4 py-2 hover:bg-green-700 hover:border-green-700 transition-colors self-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  Ver no Google Maps
                </a>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-10 lg:mt-14">
          <Cta size="lg" />
        </div>
      </div>
    </section>
  );
}
