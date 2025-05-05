'use client'

// Bibliotecas
import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdEmail, MdLocationPin } from 'react-icons/md';

export default function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        tipoImovel: 'residencial',
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulário enviado:', formData);
        alert('Obrigado pelo contato! Em breve retornaremos.');
        setFormData({ nome: '', email: '', telefone: '', mensagem: '', tipoImovel: 'residencial' });
    };

    return (
        <section
            id="contato"
            className="py-24 bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden"
        >
            {/* Fundo de circuito sutil */}
            <div className="absolute inset-0 opacity-10">
                {/* SVG omitido para brevidade */}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cabeçalho */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Agende sua <span className="text-emerald-400">Consultoria Gratuita</span>
                    </h2>
                    <p className="text-blue-200 max-w-2xl mx-auto text-lg">
                        Fale com nossos especialistas para criar a solução de CFTV ideal para você.
                    </p>
                    <p className="text-white mt-4 font-extrabold">
                        *Atendemos somente nas regiões metropolitanas de Fortaleza-CE
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    {/* Informações de Contato */}
                    <div className="bg-blue-900 p-8 md:p-12 space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>

                        <div className="space-y-6 text-blue-200">
                            <div className="flex items-start">
                                <FaPhone className="h-6 w-6 text-emerald-400 mr-4 mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Ligue para nós</p>
                                    <p>(55) 1234-5678</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MdEmail className="h-6 w-6 text-emerald-400 mr-4 mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Email</p>
                                    <p>contato@circuitsecure.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MdLocationPin className="h-6 w-6 text-emerald-400 mr-4 mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Visite-nos</p>
                                    <p>Av. Segurança, 123, Sala 101<br />Techville, SP</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Horário de Funcionamento</h4>
                            <ul className="text-blue-200 space-y-1">
                                <li>Seg–Sex: 8h–18h</li>
                                <li>Sáb: 9h–15h</li>
                                <li>Dom: Fechado</li>
                            </ul>
                            <p className="text-emerald-400 mt-4 font-medium">
                                Suporte emergencial 24/7
                            </p>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6">Envie uma Mensagem</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="nome" className="block text-sm font-medium text-blue-800 mb-1">
                                    Nome Completo*
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-1">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                        placeholder="email@exemplo.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="telefone" className="block text-sm font-medium text-blue-800 mb-1">
                                        Telefone*
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                        placeholder="(55) 1234-5678"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="tipoImovel" className="block text-sm font-medium text-blue-800 mb-1">
                                    Tipo de Imóvel
                                </label>
                                <select
                                    id="tipoImovel"
                                    name="tipoImovel"
                                    value={formData.tipoImovel}
                                    onChange={handleChange}
                                    className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                >
                                    <option value="residencial">Residencial</option>
                                    <option value="comercial">Comercial</option>
                                    <option value="industrial">Industrial</option>
                                    <option value="governo">Governo</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="mensagem" className="block text-sm font-medium text-blue-800 mb-1">
                                    Mensagem
                                </label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    rows={4}
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    placeholder="Conte-nos sobre suas necessidades de segurança..."
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center transition transform hover:scale-105 shadow-lg"
                                >
                                    Enviar Solicitação <FiSend className="ml-2 h-5 w-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
