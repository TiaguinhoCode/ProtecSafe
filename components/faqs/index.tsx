'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronCircleDown } from "react-icons/fa";
import Image from "next/image";
import faqImg from "@/public/img/faq.png";

// Scroll-triggered animations
const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "O que é um sistema de CFTV e como ele funciona?",
            answer:
                "CFTV (Circuito Fechado de Televisão) utiliza câmeras conectadas a gravadores para monitorar e armazenar imagens, permitindo vigilância remota ao vivo e reprodução de eventos.",
        },
        {
            question: "Qual a diferença entre câmeras analógicas e IP?",
            answer:
                "Câmeras analógicas enviam sinais via cabo coaxial e normalmente exigem DVRs; câmeras IP transmitem imagens via rede, oferecem maior resolução e flexibilidade de instalação.",
        },
        {
            question: "O que é detecção inteligente de movimento?",
            answer:
                "Tecnologia que usa algoritmos de IA para diferenciar pessoas, veículos e animais, reduzindo falsos alarmes e enviando alertas precisos.",
        },
        {
            question: "Como funciona o armazenamento de vídeo e qual capacidade escolher?",
            answer:
                "Vídeos podem ser armazenados em HDs ou em nuvem; a capacidade depende da resolução, taxa de quadros e quantidade de câmeras. Por exemplo, um HD de 2TB armazena cerca de 30 dias de imagens em 1080p.",
        },
        {
            question: "Posso acessar as câmeras remotamente pelo celular?",
            answer:
                "Sim. Com aplicativos dedicados, você visualiza ao vivo, reproduz gravações e recebe notificações de eventos onde estiver.",
        },
        {
            question: "Como garantir a segurança dos dados e privacidade?",
            answer:
                "Utilize criptografia HTTPS, autenticação segura, senhas fortes e, em câmeras IP, atualize firmware regularmente para evitar vulnerabilidades.",
        },
    ];

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-8 md:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={scrollVariants}
                    className="mb-5 sm:mb-10"
                >
                    <span className="font-medium text-blue-500">Perguntas Frequentes</span>
                    <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
                        Tudo sobre CFTV
                    </h1>
                </motion.div>

                <div className="md:flex md:justify-between md:gap-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={scrollVariants}
                        className="mb-8 flex justify-center md:mb-0 md:w-5/12"
                    >
                        <div className="w-full max-w-[760px]">
                            <Image src={faqImg} alt="FAQ" className="w-full h-auto object-contain" />
                        </div>
                    </motion.div>

                    <div className="md:w-6/12">
                        <ul>
                            {faqs.map(({ question, answer }, idx) => (
                                <motion.li
                                    key={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={scrollVariants}
                                    className="relative mb-5"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="w-full rounded-lg bg-blue-50 px-8 py-6 text-left flex items-center justify-between"
                                    >
                                        <h4 className="font-medium text-slate-600">{question}</h4>
                                        <motion.div
                                            animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaChevronCircleDown className="w-8 text-lg text-blue-500" />
                                        </motion.div>
                                    </button>

                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        className="overflow-hidden rounded-b-lg bg-blue-50/30"
                                    >
                                        <div className="p-6">
                                            <p className="text-slate-500">{answer}</p>
                                        </div>
                                    </motion.div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}