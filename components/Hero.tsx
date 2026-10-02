import Image from "next/image";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Cta } from "@/components/shared";

const title = (
  <>
    Cirurgia Abdominal e{" "}
    <span className="text-gold">Videolaparoscopia Avançada</span> para Atletas
  </>
);

const subtitle =
  "Restaure a força do seu core e corrija o estufamento abdominal causado pela diástase. Uma abordagem cirúrgica minimamente invasiva e desenhada para quem precisa voltar rápido aos treinos.";

export default function Hero() {
  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────── */}
      <section className="lg:hidden flex flex-col bg-primary min-h-screen">
        <div className="relative w-full flex justify-center">
          <Image
            src="/images/ian-sm.webp"
            alt="Dr. Ian Damas"
            width={700}
            height={938}
            priority
            sizes="75vw"
            className="w-3/4 h-auto block"
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgb(254_150_1/0.6),transparent)]" />
        </div>

        <div className="flex-1 flex flex-col items-center text-center gap-5 px-6 py-6 pb-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-secondary leading-snug">{title}</h1>
          <p className="text-secondary/80 text-sm leading-relaxed max-w-md">{subtitle}</p>
          <Cta />
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────── */}
      <section className="hidden lg:flex bg-primary min-h-screen relative overflow-hidden items-center">
        <FloatingPaths position={1} flip colorClass="text-secondary" />
        <FloatingPaths position={-1} flip colorClass="text-secondary" />

        <div className="absolute right-[8%] top-0 h-full z-10">
          <Image
            src="/images/ian.webp"
            alt="Dr. Ian Damas"
            width={1500}
            height={2010}
            priority
            sizes="40vw"
            className="h-full w-auto object-contain object-top"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-12 w-full py-20">
          <div className="max-w-2xl flex flex-col gap-10">
            <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight text-secondary leading-tight">
              {title}
            </h1>
            <p className="text-xl text-secondary/80 leading-relaxed max-w-xl">{subtitle}</p>
            <Cta size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
