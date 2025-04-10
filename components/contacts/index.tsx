'use client'

// Next
import Image from "next/image";
import { motion } from "framer-motion";

// Imagens
import security from "@/public/img/cameras.jpg";

// Bibliotecas
import { FaCheckCircle, FaChevronCircleDown } from "react-icons/fa";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Input } from "@heroui/input";
import { Spacer } from "@heroui/spacer";

export default function Contacts() {
    // Variants para container e itens
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section
            className="relative w-full bg-gray-900 text-white py-24 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={container}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={security}
                    alt="Instalação de CFTV"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
            </div>

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center">
                {/* Texto à esquerda */}
                <motion.div
                    className="lg:w-1/2 space-y-6"
                    variants={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl font-extrabold leading-tight"
                        variants={item}
                    >
                        Proteja seu{" "}
                        <span className="text-blue-500">patrimônio</span> com CFTV de última geração
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-300 max-w-lg"
                        variants={item}
                    >
                        Instalação profissional de câmeras de segurança, com monitoramento 24/7 e suporte técnico especializado.
                    </motion.p>
                    <motion.ul
                        className="flex flex-wrap gap-4 text-gray-300"
                        variants={container}
                    >
                        {["Monitoramento 24/7", "Acesso remoto via app", "Garantia de até 3 anos"].map((text, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center"
                                variants={item}
                            >
                                <FaCheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                                {text}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        variants={item}
                    >
                        <Button
                            as={motion.button}
                            variant="solid"
                            color="primary"
                            size="lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Solicitar Orçamento
                        </Button>
                        <Button
                            as={motion.button}
                            variant="bordered"
                            color="primary"
                            size="lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ver Projetos
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Formulário à direita */}
                <motion.div
                    className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center"
                    variants={item}
                >
                    <Card className="w-full max-w-md bg-white bg-opacity-20 backdrop-blur-md p-6">
                        <motion.h3
                            className="text-xl font-semibold text-white mb-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Peça seu orçamento gratuito
                        </motion.h3>
                        <form className="space-y-4">
                            {[
                                { label: "Nome Completo", type: "text", placeholder: "Seu nome" },
                                { label: "Telefone", type: "tel", placeholder: "(00) 00000‑0000" },
                                { label: "E-mail", type: "email", placeholder: "email@exemplo.com" },
                            ].map((field, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.1 }}>
                                    <Input
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        variant="underlined"
                                        color="primary"
                                        fullWidth
                                        type={field.type}
                                        isRequired
                                        classNames={{
                                            label: 'group-data-[filled-within=true]:text-white',
                                            input: 'text-white'
                                        }}
                                    />
                                </motion.div>
                            ))}
                            <Spacer y={1} />
                            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
                                <Button variant="solid" color="primary" fullWidth>
                                    Enviar
                                </Button>
                            </motion.div>
                        </form>
                    </Card>
                </motion.div>
            </div>

            {/* Ícone de seta animada */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <FaChevronCircleDown className="w-8 h-8 text-white" />
            </motion.div>
        </motion.section>
    );
}
