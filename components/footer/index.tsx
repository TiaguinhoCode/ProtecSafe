// Imagem
import slogan from "@/public/img/sloganCompect.png"

// Next
import Image from "next/image"
import Link from "next/link"

// Ícones de redes sociais
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-slate-50/80 pt-16">
            <div className="mx-auto max-w-7xl px-8 md:px-6">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-4">
                    <div className="md:max-w-md">
                        <Image
                            priority
                            src={slogan}
                            alt="Slogan ProtecSafe"
                            className="w-24 sm:w-28"
                        />
                        <div className="mt-4">
                            <p className="text-sm text-slate-500">
                                A ProtecSafe é líder em soluções de segurança eletrônica. Com mais de 10 anos de experiência, instalamos circuitos de segurança de alta performance para proteger o que você mais valoriza.
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-slate-700 mb-2">Serviços</p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/servicos/instalacao-circuito-seguranca" className="text-slate-500 hover:text-slate-700 transition-colors duration-300">

                                    Instalação de Circuito de Segurança

                                </Link>
                            </li>
                            <li>
                                <Link href="/servicos/monitoramento-24h" className="text-slate-500 hover:text-slate-700 transition-colors duration-300">

                                    Monitoramento 24h

                                </Link>
                            </li>
                            <li>
                                <Link href="/servicos/manutencao-e-suporte" className="text-slate-500 hover:text-slate-700 transition-colors duration-300">

                                    Manutenção e Suporte

                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Saiba Mais */}
                    <div>
                        <p className="font-semibold text-slate-700 mb-2">Saiba Mais</p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/sobre" className="text-slate-500 hover:text-slate-700 transition-colors duration-300">
                                    Quem Somos
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-slate-500 hover:text-slate-700 transition-colors duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="text-slate-500 hover:text-slate-700 transition-colors duration-300">
                                    Contato
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-slate-500 hover:text-slate-700 transition-colors duration-300">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Redes Sociais */}
                    <div>
                        <p className="font-semibold text-slate-700 mb-2">Conecte-se</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com/ProtecSafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook ProtecSafe"
                                className="text-2xl text-slate-500 hover:text-blue-600 transition-colors duration-300"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://twitter.com/ProtecSafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter ProtecSafe"
                                className="text-2xl text-slate-500 hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://instagram.com/ProtecSafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram ProtecSafe"
                                className="text-2xl text-slate-500 hover:text-pink-500 transition-colors duration-300"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://youtube.com/ProtecSafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube ProtecSafe"
                                className="text-2xl text-slate-500 hover:text-red-600 transition-colors duration-300"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://linkedin.com/company/ProtecSafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn ProtecSafe"
                                className="text-2xl text-slate-500 hover:text-blue-700 transition-colors duration-300"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Rodapé inferior */}
                <div className="flex flex-col justify-between border-t py-8 sm:flex-row">
                    <p className="text-sm text-slate-500">
                        ProtecSafe © 2025 • Todos os direitos reservados.
                    </p>
                    <div className="mt-4 flex items-center space-x-4 sm:mt-0">
                        <Link href="/politica-privacidade" className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-300">
                            Política de Privacidade
                        </Link>
                        <Link href="/termos-uso" className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-300">
                            Termos de Uso
                        </Link>
                    </div>
                </div>

            </div>
        </footer >
    )
}
