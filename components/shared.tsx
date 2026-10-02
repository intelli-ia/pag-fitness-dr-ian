"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShinyButton } from "@/components/ui/shiny-button";
import { trackGenerateLead, trackGoogleAdsConversion } from "@/lib/gtag";

export const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=5521975178377&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/** CTA padrão da marca: botão verde WhatsApp com brilho (ShinyButton). */
export function Cta({
  children = "Agendar avaliação",
  className,
  size = "md",
}: {
  children?: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <ShinyButton
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackGenerateLead();
        trackGoogleAdsConversion();
      }}
      className={cn(
        "inline-block w-fit bg-green-600 text-white",
        size === "lg" ? "px-10 py-5" : "px-7 py-4",
        className
      )}
    >
      <span className="flex items-center justify-center gap-3">
        <WhatsAppIcon size={size === "lg" ? 20 : 18} />
        {children}
      </span>
    </ShinyButton>
  );
}

/** Entrada suave ao rolar. */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Cabeçalho numerado da marca: "01 ———". */
export function NumberRule({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-tertiary font-bold text-sm tracking-[0.2em]">
        {String(n).padStart(2, "0")}
      </span>
      <div className="flex-1 h-px bg-tertiary/30" />
    </div>
  );
}

/** Cartão com brilho que segue o cursor (só em dispositivos com mouse). */
export function SpotCard({
  children,
  className,
  color = "254,150,1",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <div
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={cn("group/spot relative overflow-hidden border-t-4 border-tertiary shadow-xl shadow-black/25 ring-1 ring-inset ring-white/10 transition-transform duration-300 hover:-translate-y-1", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(${color},0.22), transparent 70%)`,
        }}
      />
      <div className="relative flex h-full flex-col gap-[inherit]">{children}</div>
    </div>
  );
}

/** Imagem no topo dos cards (sangra até as bordas do card). */
export function CardImage({
  src,
  alt,
  position = "center",
}: {
  src: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="relative -mx-8 -mt-8 lg:-mx-10 lg:-mt-10 aspect-[16/10] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover/spot:scale-105"
        style={{ objectPosition: position }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
    </div>
  );
}
