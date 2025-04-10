'use client'

// Bibliotecas
import { motion } from "framer-motion";
import {
    FaBell,
    FaEye,
    FaLock,
    FaMobileAlt,
    FaShieldAlt,
} from "react-icons/fa";

export default function Benefits() {
    const benefits = [
        {
            Icon: FaShieldAlt,
            title: "Prevenção e Redução de Crimes",
            description:
                "A presença de sistemas eletrônicos de segurança atua como um forte inibidor de atividades criminosas, reduzindo significativamente as chances de ocorrências indesejadas.",
        },
        {
            Icon: FaEye,
            title: "Monitoramento Contínuo",
            description:
                "Com a segurança eletrônica, o monitoramento é ininterrupto, garantindo vigilância 24 horas por dia, 7 dias por semana, para sua tranquilidade.",
        },
        {
            Icon: FaBell,
            title: "Alertas em Tempo Real",
            description:
                "Receba notificações imediatas sobre atividades suspeitas ou emergências, permitindo uma resposta rápida e eficaz a qualquer incidente.",
        },
        {
            Icon: FaLock,
            title: "Controle de Acesso Eficiente",
            description:
                "Gerencie e restrinja o acesso a áreas específicas, garantindo que apenas pessoas autorizadas possam entrar em locais sensíveis.",
        },
        {
            Icon: FaMobileAlt,
            title: "Acesso Remoto",
            description:
                "Monitore e controle seu sistema de segurança de qualquer lugar do mundo através de dispositivos móveis, proporcionando conveniência e controle total.",
        },
    ];

    // Variantes de scroll-triggered animation
    const scrollVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="relative w-full bg-gradient-to-tr from-white to-blue-100 py-24 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Header animado */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={scrollVariants}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Benefícios dos Nossos Serviços
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Descubra as vantagens de implementar nossos sistemas de segurança de
                        última geração.
                    </p>
                </motion.div>

                {/* Grid de benefícios */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map(({ Icon, title, description }) => (
                        <motion.div
                            key={title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={scrollVariants}
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Icon className="size-12 text-blue-600 mb-4" />
                            <h4 className="text-lg font-semibold text-gray-800 text-center">
                                {title}
                            </h4>
                            <p className="mt-2 text-gray-600 text-center">
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
