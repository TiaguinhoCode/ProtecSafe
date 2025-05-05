'use client'

// React
import React from 'react';

// Bibliotecas
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { IoLocate } from 'react-icons/io5';
import { LuSettings } from "react-icons/lu";
import { motion } from 'framer-motion';

const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease: 'easeIn' } }
};

export default function HowItWorks() {
    const steps = [
        {
            icon: <IoLocate className="h-12 w-12 text-emerald-500" />,
            title: "Consultoria & Vistoria",
            description: "Nossos especialistas avaliam seu local para entender suas necessidades e criar a solução ideal.",
            detail: "Iniciamos com um levantamento completo da propriedade, identificando áreas críticas e os melhores pontos para instalar as câmeras. Discutimos suas preocupações de segurança em detalhe."
        },
        {
            icon: <LuSettings className="h-12 w-12 text-teal-400" />,
            title: "Instalação & Configuração",
            description: "Instalação profissional das câmeras, DVR/NVR e ajustes de gravação.",
            detail: "Técnicos certificados cuidam de toda parte elétrica, passagem de cabos, montagem e configuração do sistema, garantindo mínima interferência nas suas atividades."
        },
        {
            icon: <FaCheckCircle className="h-12 w-12 text-emerald-500" />,
            title: "Treinamento & Acesso Remoto",
            description: "Treinamos você no uso do sistema e configuramos o acesso remoto pelo celular.",
            detail: "Após a instalação, oferecemos treinamento completo sobre como visualizar as imagens, configurar alertas e usar nosso app para monitorar de qualquer lugar."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div
                className="absolute inset-0 opacity-5"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 100, ease: 'linear' }}
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.5)">
                        <rect width="100%" height="100%" fill="none" />
                        <path d="M0,50 L100,50" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M50,0 L50,100" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="50" cy="50" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="25" cy="25" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="75" cy="25" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="25" cy="75" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="75" cy="75" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M25,25 L25,50" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M75,25 L75,50" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M25,75 L50,75" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M75,75 L50,75" stroke="currentColor" strokeWidth="1" fill="none" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#circuitPattern)" />
                </svg>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title with Fade In */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                        Como Nosso <span className="text-emerald-500">Serviço Funciona</span>
                    </h2>
                    <p className="text-blue-800 max-w-2xl mx-auto text-lg">
                        Do primeiro contato à configuração final, cuidamos de cada etapa para garantir sua segurança.
                    </p>
                </motion.div>

                {/* Steps with Scroll Animation */}
                <div className="flex flex-col lg:flex-row w-full justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={stepVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
                            className="w-full lg:w-5/12 relative"
                        >
                            <motion.div
                                className="bg-blue-50 rounded-lg p-8 border border-blue-100 shadow-lg h-full flex flex-col"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="mb-6">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-blue-950 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-blue-700 mb-6">
                                    {step.description}
                                </p>
                                <p className="text-blue-600 text-sm mt-auto">
                                    {step.detail}
                                </p>
                            </motion.div>

                            {index < steps.length - 1 && (
                                <motion.div
                                    className="hidden lg:block absolute top-1/2 -right-10 transform -translate-y-1/2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
                                    viewport={{ once: true }}
                                >
                                    <FaArrowRight className="h-8 w-8 text-teal-400" />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button Fade In */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-xl font-bold text-blue-950 mb-4">Pronto para Começar?</h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-200 shadow-lg"
                    >
                        Agende Sua Consultoria Gratuita
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};
