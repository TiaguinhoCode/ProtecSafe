'use client'

// Bibliotecas
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FiAlertOctagon,
    FiBriefcase,
    FiCamera,
    FiClipboard,
    FiHeadphones,
    FiHome,
    FiSettings,
    FiShield,
    FiSmartphone,
} from "react-icons/fi";

// Imagens
import alert from "@/public/img/alarm.jpg";

const scrollVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6 },
    },
};

export default function Services() {
    const features = [
        { Icon: FiClipboard, title: "Planejamento de Projeto" },
        { Icon: FiCamera, title: "Instalação de Câmeras" },
        { Icon: FiSettings, title: "Configuração de Sistema" },
    ];

    const serviceTypes = [
        {
            Icon: FiSmartphone,
            title: "Alarme Monitorado por Celular",
            description:
                "Gerencie seu sistema de segurança remotamente. Arme ou desarme o alarme, receba alertas em tempo real e controle tudo diretamente pelo seu celular com total praticidade.",
        },
        {
            Icon: FiAlertOctagon,
            title: "Botão de Emergência SOS",
            description:
                "Em caso de emergência, acione o botão SOS e nossa central de monitoramento 24h atuará de forma imediata, acionando ajuda adequada à situação.",
        },
        {
            Icon: FiShield,
            title: "Garantia Vitalícia",
            description:
                "Todos os equipamentos contam com garantia vitalícia e atualizações constantes de software, garantindo tecnologia de ponta sempre atualizada.",
        },
        {
            Icon: FiHeadphones,
            title: "Suporte Técnico 24h",
            description:
                "Conte com atendimento técnico especializado disponível 24 horas por dia. Soluções rápidas e eficazes sempre que você precisar.",
        },
        {
            Icon: FiBriefcase,
            title: "Empresas e Negócios",
            description:
                "Soluções profissionais de segurança para seu negócio: monitoramento completo, câmeras, alarmes e suporte técnico com total confiabilidade.",
        },
        {
            Icon: FiHome,
            title: "Casas e Apartamentos",
            description:
                "Proteja seu lar com sistemas de alarme modernos, instalação profissional e atendimento rápido em qualquer emergência.",
        },
    ];

    return (
        <section
            aria-labelledby="features-title"
            className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16"
        >
            {/* Background decorativo */}
            <div className="absolute inset-0 pointer-events-none">
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    fill="none"
                    viewBox="0 0 800 600"
                >
                    <circle cx="100" cy="500" r="100" fill="rgba(59, 130, 246, 0.1)" />
                    <circle cx="700" cy="100" r="200" fill="rgba(59, 130, 246, 0.05)" />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-8">
                {/* Cabeçalho animado */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={scrollVariants}
                    className="mb-12 text-center"
                >
                    <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">
                        Nossos Serviços
                    </span>
                    <h2
                        id="features-title"
                        className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900"
                    >
                        Instalação de Circuito de CFTV
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        Soluções completas em segurança eletrônica, com tecnologia de ponta e
                        suporte dedicado 24/7.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Imagem com scroll-trigger */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={scrollVariants}
                        className="relative w-full h-0 pb-[62%] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={alert}
                            alt="Alarme em destaque"
                            layout="fill"
                            objectFit="cover"
                            className="transform hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                    </motion.div>

                    {/* Texto e grid de features */}
                    <div className="space-y-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={scrollVariants}
                            className="space-y-4 text-gray-700"
                        >
                            <p>
                                <strong className="text-blue-600">Cobertura total:</strong> planejamento estratégico e posicionamento inteligente de câmeras para proteger cada ponto crítico.
                            </p>
                            <p>
                                <strong className="text-blue-600">Alta tecnologia:</strong> câmeras IP PoE, DVR/NVR de alta capacidade e acesso remoto por app.
                            </p>
                            <p>
                                <strong className="text-blue-600">Suporte completo:</strong> cabeamento, configuração, testes e treinamento para operação sem falhas.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={scrollVariants}
                        >
                            <button className="inline-block rounded-full bg-blue-600 px-10 py-4 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300">
                                Solicitar Orçamento
                            </button>
                        </motion.div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map(({ Icon, title }) => (
                                <motion.div
                                    key={title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={scrollVariants}
                                    className="group relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
                                    <Icon className="mb-4 h-16 w-16 text-blue-600 z-10" />
                                    <h3 className="text-base text-center font-semibold text-gray-800 z-10 group-hover:text-blue-600 transition-colors duration-300">
                                        {title}
                                    </h3>
                                    <span className="mt-2 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        Saiba mais →
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid de tipos de serviço */}
                <div className="mt-12 w-full grid gap-6 sm:grid-cols-2">
                    {serviceTypes.map(({ Icon, title, description }) => (
                        <motion.div
                            key={title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={scrollVariants}
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg"
                        >
                            <Icon className="size-12 text-blue-600 mb-4" />
                            <h4 className="text-lg font-semibold text-gray-800 text-center">
                                {title}
                            </h4>
                            <p className="mt-2 text-gray-600 text-center">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
