'use client'

// React
import React from 'react';

// Bibliotecas
import { IoLockClosedOutline, IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaEye, FaRegLightbulb, FaWifi } from 'react-icons/fa';
import { GoZap } from "react-icons/go";
import { MdHome, MdSmartphone } from 'react-icons/md';
import { motion } from 'framer-motion';

// Tipagem
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, when: 'beforeChildren' } },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { scale: 1.05, rotate: 1, transition: { duration: 0.3 } },
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }
            }
            whileHover="hover"
            className="bg-blue-900 p-6 rounded-2xl shadow-xl border border-blue-800 cursor-pointer"
        >
            <motion.div
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1, transition: { duration: 0.6 } }}
                className="bg-gradient-to-br from-blue-700 to-blue-900 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-emerald-400"
            >
                {icon}
            </motion.div>
            <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                className="text-xl font-semibold text-white mb-2"
            >
                {title}
            </motion.h3>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="text-blue-200"
            >
                {description}
            </motion.p>
        </motion.div >
    );
};

export default function Features() {
    const securityFeatures = [
        {
            icon: <IoShieldCheckmarkSharp className="h-6 w-6" />,
            title: "Segurança Avançada",
            description: "Criptografia de nível militar e tratamento seguro dos dados mantêm suas gravações protegidas o tempo todo."
        },
        {
            icon: <FaEye className="h-6 w-6" />,
            title: "Monitoramento 24/7",
            description: "Vigilância contínua com alertas em tempo real para total tranquilidade."
        },
        {
            icon: <GoZap className="h-6 w-6" />,
            title: "Detecção Inteligente de Movimento",
            description: "Análises por IA que diferenciam pessoas, animais e veículos, reduzindo alarmes falsos."
        },
        {
            icon: <FaWifi className="h-6 w-6" />,
            title: "Acesso Remoto",
            description: "Visualize as imagens das câmeras de qualquer lugar do mundo através do nosso app seguro."
        }
    ];

    const automationFeatures = [
        {
            icon: <MdHome className="h-6 w-6" />,
            title: "Integração com Casa Inteligente",
            description: "Conecte seu sistema de segurança à automação residencial para mais controle e conveniência."
        },
        {
            icon: <IoLockClosedOutline className="h-6 w-6" />,
            title: "Fechaduras Inteligentes",
            description: "Controle o acesso à sua propriedade remotamente e receba notificações de todos os eventos."
        },
        {
            icon: <FaRegLightbulb className="h-6 w-6" />,
            title: "Controle de Iluminação",
            description: "Programe e gerencie suas luzes remotamente para melhorar a segurança e a eficiência."
        },
        {
            icon: <MdSmartphone className="h-6 w-6" />,
            title: "Controle pelo Celular",
            description: "Gerencie todas as funções de automação pelo nosso app móvel, onde estiver."
        }
    ];

    return (
        <section
            id="features"
            className="py-24 bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden"
        >
            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <motion.svg
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.5) rotate(0)">
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
                </motion.svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.8 } }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Segurança & Automação <span className="text-emerald-400">Completas</span>
                    </h2>
                    <p className="text-blue-200 max-w-2xl mx-auto text-lg">
                        A ProtectSafe oferece soluções avançadas de segurança e automação residencial para sua total tranquilidade.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    {/* Security Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-white text-center mb-8">Recursos de Segurança</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {securityFeatures.map((feature, i) => (
                                <FeatureCard key={i} {...feature} />
                            ))}
                        </div>
                    </div>

                    {/* Automation Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-white text-center mb-8">Automação Residencial</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {automationFeatures.map((feature, i) => (
                                <FeatureCard key={i} {...feature} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
