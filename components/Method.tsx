import { Cta, CardImage, NumberRule, Reveal, SpotCard } from "@/components/shared";

const pillars = [
  {
    title: "Minimamente invasiva",
    body: "Técnica exclusiva, sem a agressão dos métodos tradicionais abertos.",
    image: "/images/card-minimamente-invasiva-ian.webp",
    pos: "50% 30%",
  },
  {
    title: "Pós-operatório reduzido",
    body: "Recuperação estrutural cirúrgica com pós-operatório drasticamente menor.",
    image: "/images/card-pos-operatorio.webp",
    pos: "50% 30%",
  },
  {
    title: "Sem afastamento prolongado",
    body: "Menos risco de ficar longe da rotina de musculação.",
    image: "/images/card-treino.jpg",
    pos: "50% 50%",
  },
];

export default function Method() {
  return (
    <section className="section-edge bg-primary py-12 lg:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-tertiary/15 blur-3xl animate-drift-a" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-[28rem] w-[28rem] rounded-full bg-[#4b34d6]/25 blur-3xl animate-drift-b" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center">
          <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight text-secondary">
            Qual o diferencial da <span className="text-gold">minha abordagem?</span>
          </h2>
          <p className="text-secondary/80 text-sm lg:text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            Sou um dos poucos cirurgiões do Brasil que trabalha com técnica minimamente
            invasiva. Este método exclusivo garante uma recuperação estrutural cirúrgica
            sem a agressão dos métodos tradicionais abertos. Para quem vive de treino e
            busca evoluir cargas com segurança, o meu foco não é apenas corrigir a sua
            parede abdominal, mas fazê-lo reduzindo drasticamente o pós-operatório e
            eliminando o risco de afastamento prolongado da rotina de musculação.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 lg:mt-14">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <SpotCard className="bg-secondary rounded-2xl p-8 lg:p-10 gap-6 h-full">
                <CardImage src={p.image} alt={p.title} position={p.pos} />
                <NumberRule n={i + 1} />
                <h3 className="text-tertiary font-bold text-xl lg:text-2xl leading-snug">
                  {p.title}
                </h3>
                <p className="text-primary/75 font-medium text-sm leading-relaxed">
                  {p.body}
                </p>
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
