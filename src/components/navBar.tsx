import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones para abrir/fechar o menu (opcional)

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            {/* Botão de menu para mobile */}
            <button
                className="md:hidden fixed top-5 left-5 z-50 text-zinc-50  p-2  bg-zinc-950  rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="left-20" size={24} /> : <Menu size={24} />}
            </button>

            {/* Navegação lateral (sidebar) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 z-40 bg-zinc-800 text-zinc-50 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <nav className="flex flex-col gap-5 p-5 mt-14 ">
                    <a href="#home" className="hover:text-main-500 hover:underline">Início</a>
                    <a href="#structure" className="hover:text-main-500 hover:underline">Estrutura</a>
                    <a href="#schedules" className="hover:text-main-500 hover:underline">Horários</a>
                    <a href="#plans" className="hover:text-main-500 hover:underline">Planos</a>
                    <a href="#contact" className="hover:text-main-500 hover:underline">Contato</a>
                    <a href="#" className="hover:text-main-500 hover:underline">Agende uma aula</a>
                </nav>
            </div>

            {/* Navegação padrão para telas maiores */}
            <nav className="hidden md:flex py-4 flex-row gap-10 pl-14 text-zinc-50 fixed top-0 left-0 w-full z-50  bg-zinc-950">
                <a href="#home" className="hover:text-main-500 hover:underline">Início</a>
                <a href="#structure" className="hover:text-main-500 hover:underline">Estrutura</a>
                <a href="#schedules" className="hover:text-main-500 hover:underline">Horários</a>
                <a href="#plans" className="hover:text-main-500 hover:underline">Planos</a>
                <a href="#contact" className="hover:text-main-500 hover:underline">Contato</a>
                <a href="#" className="hover:text-main-500 hover:underline">Agende uma aula</a>
            </nav>
        </div>
    );
}
