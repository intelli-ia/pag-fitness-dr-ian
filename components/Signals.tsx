import { Cta, CardImage, NumberRule, Reveal, SpotCard } from "@/components/shared";

const signals = [
  { title: "Agachamento", body: "Dificuldade para progredir de carga.", image: "/images/card-agachamento.webp", pos: "50% 40%" },
  { title: "Levantamento terra", body: "Rendimento abaixo do que já foi.", image: "/images/card-terra.webp", pos: "50% 35%" },
  { title: "Hérnias", body: "Umbilicais e inguinais favorecidas pelo esforço no limite.", image: "/images/card-hernia.webp", pos: "50% 45%" },
];

export default function Signals() {
  return (
    <section className="section-edge bg-primary py-12 lg:py-24 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(254_150_1/0.14),transparent_70%),radial-gradient(ellipse_50%_40%_at_100%_100%,rgb(255_255_242/0.06),transparent_70%),var(--gradient-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
            Atletas com baixo percentual de gordura estão recorrendo à{" "}
            <span className="text-gold">correção cirúrgica da parede abdominal.</span>{" "}
            Entenda.
          </h2>
          <p className="text-secondary/80 text-sm lg:text-lg leading-relaxed mt-6 lg:mt-8">
            Se você sente que não está rendendo mais como antes, e sente dificuldade para
            progredir de carga no agachamento ou no levantamento terra, não espere mais
            para buscar tratamento. Além de aumentar suas zonas de tensão e treinar no
            limite do esforço, isso favorece o surgimento de hérnias umbilicais e
            inguinais.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 lg:mt-14">
          {signals.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <SpotCard className="bg-secondary rounded-2xl p-8 lg:p-10 gap-6 h-full">
                <CardImage src={s.image} alt={s.title} position={s.pos} />
                <NumberRule n={i + 1} />
                <h3 className="text-tertiary font-bold text-xl lg:text-2xl leading-snug">
                  {s.title}
                </h3>
                <p className="text-primary/75 font-medium text-sm leading-relaxed">
                  {s.body}
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
