'use client'

// Plans.tsx
import { motion } from "framer-motion";

export default function Plans() {
    // Variants para container (stagger) e cards (entrada/saída)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-8 md:px-6">
                {/* Cabeçalho animado ao scroll */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariants}
                    className="mb-12 text-center"
                >
                    <span className="font-medium text-blue-500">Nossos Planos</span>
                    <h2 className="text-3xl font-bold text-slate-700 sm:text-4xl">
                        Escolha o plano certo para você
                    </h2>
                </motion.div>

                {/* Grid de cards com stagger */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={containerVariants}
                    className="flex flex-wrap justify-center -mx-4"
                >
                    {[
                        {
                            name: "Personal",
                            price: "$59",
                            period: "/ year",
                            features: [
                                "1 User",
                                "All UI components",
                                "Lifetime access",
                                "Free updates",
                                "Use on 1 project",
                                "3 Months support",
                            ],
                        },
                        {
                            name: "Business",
                            price: "$99",
                            period: "/ year",
                            features: [
                                "5 Users",
                                "All UI components",
                                "Lifetime access",
                                "Priority updates",
                                "Use on 5 projects",
                                "6 Months support",
                            ],
                        },
                        {
                            name: "Enterprise",
                            price: "$199",
                            period: "/ year",
                            features: [
                                "Unlimited Users",
                                "All UI components",
                                "Lifetime access",
                                "Dedicated updates",
                                "Unlimited projects",
                                "12 Months support",
                            ],
                        },
                    ].map((plan) => (
                        <motion.div
                            key={plan.name}
                            variants={cardVariants}
                            className="w-full md:w-1/2 lg:w-1/3 px-4"
                        >
                            <div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
                                <span className="text-primary font-semibold text-lg block mb-4">
                                    {plan.name}
                                </span>
                                <h2 className="font-bold text-dark mb-5 text-[42px]">
                                    {plan.price}
                                    <span className="text-base text-body-color font-medium">
                                        {plan.period}
                                    </span>
                                </h2>
                                <p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">
                                    Perfect for using in a personal website or a client project.
                                </p>
                                <div className="mb-7">
                                    {plan.features.map((feat) => (
                                        <p
                                            key={feat}
                                            className="text-base text-body-color leading-loose mb-1"
                                        >
                                            {feat}
                                        </p>
                                    ))}
                                </div>
                                <a
                                    href="#"
                                    className="w-full block text-base font-semibold text-primary bg-transparent border border-[#D4DEFF] rounded-md text-center p-4 hover:text-white hover:bg-primary hover:border-primary transition"
                                >
                                    Choose {plan.name}
                                </a>
                                {/* Elementos decorativos SVG podem ficar fora do motion */}
                                <span className="absolute right-0 top-7 z-[-1]">
                                    {/* ...SVG grande... */}
                                </span>
                                <span className="absolute right-4 top-4 z-[-1]">
                                    {/* ...SVG menor... */}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
