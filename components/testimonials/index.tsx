'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRegStar, FaStar } from 'react-icons/fa';

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
}

const depoimentos: TestimonialProps[] = [
    {
        name: "Sarah Johnson",
        role: "Gerente de Escritório",
        company: "Apex Solutions",
        image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
        quote: "O sistema CircuitSecure revolucionou o monitoramento do nosso escritório. As câmeras HD e o acesso mobile garantem tranquilidade mesmo à distância. A instalação foi rápida e impecável!",
        rating: 5
    },
    {
        name: "Robert Chen",
        role: "Loja Proprietário",
        company: "Urban Retail",
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        quote: "Após casos de furto, investimos no CFTV completo. A detecção inteligente já impediu duas tentativas de roubo. Vale cada centavo!",
        rating: 5
    },
    {
        name: "Amanda Torres",
        role: "Proprietária de Residência",
        company: "Cliente Residencial",
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
        quote: "Como mãe solo, a segurança é prioridade. A equipe CircuitSecure mapeou todos os pontos vulneráveis e ajustou tudo perfeitamente. Durmo tranquila sabendo que estamos protegidos.",
        rating: 4
    }
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: (direction: number) => ({ x: direction < 0 ? 300 : -300, opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } })
};

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, company, image, quote, rating }) => (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="bg-blue-900 rounded-2xl shadow-2xl p-8 relative overflow-hidden hover:shadow-blue-500/50 transition-shadow duration-300"
    >
        <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <motion.img
                        src={image}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 0.5 } }}
                    />
                    <div className="ml-4">
                        <h4 className="text-white font-semibold text-lg">{name}</h4>
                        <p className="text-blue-300 text-sm">{role} • {company}</p>
                    </div>
                </div>
                <FaQuoteRight className="h-8 w-8 text-emerald-500 opacity-70" />
            </div>
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) =>
                    i < rating ? <FaStar key={i} className="h-5 w-5 text-yellow-400" /> :
                        <FaRegStar key={i} className="h-5 w-5 text-yellow-400" />
                )}
            </div>
            <p className="text-blue-100 italic flex-grow">{quote}</p>
        </div>
    </motion.div>
);

export default function Testimonials() {
    const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

    const paginate = (newDirection: number) => {
        const newIndex = (page + newDirection + depoimentos.length) % depoimentos.length;
        setPage([newIndex, newDirection]);
    };

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        O Que Nossos <span className="text-emerald-400">Clientes Dizem</span>
                    </h2>
                    <p className="text-blue-200 max-w-2xl mx-auto text-lg">
                        Veja como nossas soluções de CFTV oferecem segurança e tranquilidade reais.
                    </p>
                </motion.div>

                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                    {depoimentos.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>

                <div className="md:hidden relative">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute w-full"
                        >
                            <TestimonialCard {...depoimentos[page]} />
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center items-center mt-8 space-x-4">
                        <button onClick={() => paginate(-1)} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-2 transition">
                            <FaChevronLeft className="h-6 w-6" />
                        </button>
                        <div className="flex space-x-2">
                            {depoimentos.map((_, i) => (
                                <motion.span
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i === page ? 'bg-emerald-500' : 'bg-blue-700'}`}
                                    layoutId={i === page ? 'activeDot' : undefined}
                                />
                            ))}
                        </div>
                        <button onClick={() => paginate(1)} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-2 transition">
                            <FaChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#contato"
                        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg"
                    >
                        Junte-se aos Clientes Satisfeitos
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
