'use client'

// Bibliotecas
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaShield } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, ease: "easeOut", duration: 0.6 }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } }
};

export default function Hero() {
    return (
        <motion.section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-950"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="inline-flex items-center bg-blue-900/50 px-4 py-2 rounded-full text-emerald-400 mb-4 backdrop-blur"
                        variants={fadeInUp}
                    >
                        <FaShield className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Soluções avançadas de segurança</span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                    >
                        Sistema de <span className="text-emerald-500">CFTV de Última Geração</span> para Máxima Proteção
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl"
                        variants={fadeInUp}
                    >
                        Proteja sua casa ou empresa com tecnologia de vigilância de ponta.
                        Nossas soluções de CFTV baseadas em circuitos oferecem monitoramento 24 horas por dia, 7 dias por semana, com imagens em HD de alta nitidez.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                        variants={fadeInUp}
                    >
                        <Button
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold min-w-20 h-14 py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                            endContent={<MdKeyboardArrowRight className="ml-2 h-5 w-5" />}
                        >
                            Obtenha um orçamento grátis
                        </Button>
                        <motion.button
                            className="bg-transparent hover:bg-blue-900/50 text-white border border-blue-400 font-medium py-3 px-6 rounded-md transition-all duration-200 flex items-center justify-center backdrop-blur-sm"
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } } }}
                        >
                            Saber mais <FaEye className="ml-2 h-5 w-5" />
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    variants={fadeInUp}
                >
                    <div className="relative">
                        <motion.img
                            src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="CCTV Security Camera"
                            className="rounded-lg shadow-2xl w-full max-w-md z-10 relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
                        />

                        <motion.div
                            className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg transform rotate-3 z-20"
                            variants={fadeInUp}
                        >
                            <div className="text-sm font-bold">4K Ultra HD</div>
                            <div className="text-xs opacity-80">Imagem Nítida e Detalhada</div>
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-4 rounded-lg shadow-lg transform -rotate-3 z-20"
                            variants={fadeInUp}
                        >
                            <div className="text-sm font-bold">Detecção Inteligente</div>
                            <div className="text-xs opacity-80">Análise com Inteligência Artificial</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-blue-200 text-sm mb-2">Role para baixo</span>
                <div className="w-8 h-8 border-2 border-blue-200 rounded-full flex items-center justify-center">
                    <div className="w-1 h-3 bg-blue-200 rounded-full"></div>
                </div>
            </div>
        </motion.section>
    );
};
