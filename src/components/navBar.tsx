import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones para abrir/fechar o menu (opcional)

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Botão de menu para mobile */}
            <button
                className="md:hidden fixed top-5 left-5 z-50 text-zinc-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="left-20" size={32} /> : <Menu size={32} />}
            </button>

            {/* Navegação lateral (sidebar) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-zinc-800 text-zinc-50 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <nav className="flex flex-col gap-5 p-5 mt-14 ">
                    <a href="#" className="hover:text-main-500 hover:underline">Início</a>
                    <a href="#" className="hover:text-main-500 hover:underline">Estrutura</a>
                    <a href="#" className="hover:text-main-500 hover:underline">Horários</a>
                    <a href="#" className="hover:text-main-500 hover:underline">Planos</a>
                    <a href="#" className="hover:text-main-500 hover:underline">Contato</a>
                    <a href="#" className="hover:text-main-500 hover:underline">Agende uma aula</a>
                </nav>
            </div>

            {/* Navegação padrão para telas maiores */}
            <nav className="hidden md:flex my-10 flex-row gap-10 ml-14 text-zinc-50">
                <a href="#" className="hover:text-main-500 hover:underline">Início</a>
                <a href="#" className="hover:text-main-500 hover:underline">Estrutura</a>
                <a href="#" className="hover:text-main-500 hover:underline">Horários</a>
                <a href="#" className="hover:text-main-500 hover:underline">Planos</a>
                <a href="#" className="hover:text-main-500 hover:underline">Contato</a>
                <a href="#" className="hover:text-main-500 hover:underline">Agende uma aula</a>
            </nav>
        </div>
    );
}
