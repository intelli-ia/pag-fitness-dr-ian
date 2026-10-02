"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cta } from "@/components/shared";

const faqs = [
  {
    q: "Qual é o valor da avaliação cirúrgica e o que está incluído?",
    a: "A consulta particular tem o valor de R$ 400,00. Este valor não cobre apenas o momento da avaliação presencial, mas um acompanhamento completo: inclui uma consulta clínica detalhada (aproximadamente 1 hora), o planeamento e prescrição de exames, a consulta de retorno para análise dos resultados e 30 dias de suporte direto comigo pelo WhatsApp para esclarecimento de qualquer dúvida pré-operatória.",
  },
  {
    q: "A cirurgia de correção da diástase é indicada para o meu perfil?",
    a: "O meu foco não é a cirurgia plástica estética (como remoção de grandes excessos de pele ou lipoaspiração), mas sim a correção funcional estrutural da parede abdominal. O paciente ideal para esta abordagem é o homem com perfil atlético, que já possui um baixo percentual de gordura (IMC obrigatoriamente abaixo de 27), mas sofre com o estufamento abdominal e perda de força no core.",
  },
  {
    q: "Em quanto tempo posso regressar aos treinos de musculação?",
    a: "Como utilizo a técnica de videolaparoscopia avançada (procedimento minimamente invasivo), a agressão aos tecidos é drasticamente menor do que na cirurgia aberta tradicional. Isso traduz-se numa recuperação muito mais célere e menos dolorosa. O cronograma exato do regresso é avaliado caso a caso, mas o objetivo central do método é garantir o menor tempo possível de off-season, minimizando a perda de massa magra.",
  },
  {
    q: "O atendimento cobre planos de saúde (convênios)?",
    a: "Sim. As avaliações e procedimentos podem ser realizados através da Golden Cross, Unimed, AMIL, Saúde Caixa e Saúde Petrobras em ambas as clínicas. Exclusivamente para a unidade de Niterói, também atendo pela Sulamerica e Bradesco Saúde.",
  },
  {
    q: "Onde ocorrem os atendimentos presenciais?",
    a: "As avaliações ocorrem em dois polos de fácil acesso e com estrutura de excelência: no Rio de Janeiro (Tijuca), todas as terças-feiras durante a tarde, e em Niterói (Icaraí), todas as sextas-feiras à tarde.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-edge bg-primary py-12 lg:py-24 border-t border-secondary/10 bg-[radial-gradient(ellipse_at_top_right,rgb(75_52_214/0.25),transparent_60%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Esquerda */}
          <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight text-secondary leading-tight">
              Esclareça as suas <span className="text-gold">dúvidas</span> antes de agendar
            </h2>
            <Cta />
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`rounded-2xl border px-5 bg-secondary/5 transition-colors duration-300 ${open === i ? "border-tertiary bg-secondary/10" : "border-secondary/10"}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between py-4 lg:py-5 text-left text-secondary font-bold text-sm lg:text-base hover:text-tertiary transition"
                >
                  {faq.q}
                  <span className="text-tertiary text-xl ml-4 flex-shrink-0">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="pb-5 text-secondary/70 text-xs lg:text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
