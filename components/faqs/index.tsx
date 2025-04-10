'use client'

// React
import { useState } from "react";

// Biblioteca
import { motion } from "framer-motion";
import { FaChevronCircleDown } from "react-icons/fa";

// Next
import Image from "next/image";

// imagens
import faqImg from "@/public/img/faq.png";

// Variantes para scroll-triggered animations
const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Lorem ipsum dolor sit, amet consectetur?",
            answer:
                "Ipsu m! Assumenda, dolorem nihil. Commodi, qui? Officiis provident, cumque perspiciatis magni commodi rem nihil.",
        },
        {
            question: "Consectetur adipiscing elit, sed do eiusmod?",
            answer:
                "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
        {
            question: "Quis autem vel eum iure reprehenderit?",
            answer:
                "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        },
        {
            question: "At vero eos et accusamus et iusto odio?",
            answer:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        },
    ];

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-8 md:px-6">
                {/* Cabeçalho com scroll animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={scrollVariants}
                    className="mb-5 sm:mb-10"
                >
                    <span className="font-medium text-blue-500">
                        Nossas perguntas frequentes
                    </span>
                    <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
                        Perguntas frequentes
                    </h1>
                </motion.div>

                <div className="md:flex md:justify-between md:gap-6">
                    {/* Imagem com scroll animation */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={scrollVariants}
                        className="mb-8 flex justify-center md:mb-0 md:w-5/12"
                    >
                        <Image src={faqImg} alt="FAQ" className="w-full" />
                    </motion.div>

                    {/* Lista de FAQs */}
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
                                    {/* Botão de toggle */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(openIndex === idx ? null : idx)
                                        }
                                        className="w-full rounded-lg bg-blue-50 px-8 py-6 text-left flex items-center justify-between"
                                    >
                                        <h4 className="font-medium text-slate-600">
                                            {question}
                                        </h4>
                                        <motion.div
                                            animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaChevronCircleDown className="w-8 text-lg text-blue-500" />
                                        </motion.div>
                                    </button>

                                    {/* Resposta animada */}
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: openIndex === idx ? "auto" : 0,
                                            opacity: openIndex === idx ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
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
