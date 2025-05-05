'use client'

// React
import React, { useState } from 'react';

// Bibliotecas
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'
import { FaQuoteRight, FaRegStar, FaStar } from 'react-icons/fa';

// css
import 'swiper/css';
import 'swiper/css/pagination';

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
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-900 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col h-full overflow-hidden"
    >
        <div className="flex items-center mb-4">
            <img
                src={image}
                alt={name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-emerald-500"
            />
            <div className="ml-4">
                <h4 className="text-white font-semibold text-base sm:text-lg">{name}</h4>
                <p className="text-blue-300 text-xs sm:text-sm">{role} • {company}</p>
            </div>
            <FaQuoteRight className="ml-auto text-emerald-400 opacity-70 h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div className="flex mb-4">
            {[...Array(5)].map((_, i) =>
                i < rating ? (
                    <FaStar key={i} className="h-4 w-4 text-yellow-400 mr-1" />
                ) : (
                    <FaRegStar key={i} className="h-4 w-4 text-yellow-400 mr-1" />
                )
            )}
        </div>
        <p className="text-blue-100 italic flex-grow text-sm sm:text-base">{quote}</p>
    </motion.div>
);

export default function Testimonials() {
    const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

    const paginate = (newDirection: number) => {
        const newIndex = (page + newDirection + depoimentos.length) % depoimentos.length;
        setPage([newIndex, newDirection]);
    };

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        O Que Nossos <span className="text-emerald-400">Clientes Dizem</span>
                    </h2>
                    <p className="mt-2 text-blue-200 text-sm sm:text-base">
                        Veja como nossas soluções de CFTV oferecem segurança e tranquilidade reais.
                    </p>
                </motion.div>

                {/* Grid desktop */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    {depoimentos.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>

                {/* Swiper mobile */}
                <div className="md:hidden">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop
                        className="pb-6"
                    >
                        {depoimentos.map((t, i) => (
                            <SwiperSlide key={i}>
                                <TestimonialCard {...t} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="#contato"
                        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full transition transform hover:scale-105"
                    >
                        Junte-se aos Clientes Satisfeitos
                    </a>
                </div>
            </div>
        </section>
    );
}
