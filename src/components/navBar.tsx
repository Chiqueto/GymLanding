import { Menu, X } from "lucide-react"; // Ícones para abrir/fechar o menu (opcional)
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {

    return (
        <div className="">
            {/* Botão de menu para mobile */}
            {/* <button
                className="md:hidden  text-zinc-50  p-2  bg-zinc-950  rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ?  :  />}
            </button> */}

            {/* Navegação lateral (sidebar) */}
            {/* <div
                className={`fixed top-0 left-0 h-full w-64 z-40 bg-zinc-800 text-zinc-50 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                
            </div> */}

            <Sheet>
                <SheetTrigger className="fixed top-0 left-0 z-50 w-full p-4 bg-zinc-950"><div className="flex flex-row justify-between items-center">
                    <Menu size={24} className="text-zinc-50" /> <img src="GymLogoClean.svg" alt="" className="w-6" />
                </div></SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle className="text-zinc-50 flex flex-row "><p className="flex-1">Menu</p> <SheetClose><X className="" size={24} /></SheetClose></SheetTitle>
                        <SheetDescription>
                            <nav className="flex flex-col gap-5 p-5 text-zinc-50 text-left">
                                <a href="#home" className="hover:text-main-500 hover:underline">Início</a>
                                <a href="#structure" className="hover:text-main-500 hover:underline">Estrutura</a>
                                <a href="#schedules" className="hover:text-main-500 hover:underline">Horários</a>
                                <a href="#plans" className="hover:text-main-500 hover:underline">Planos</a>
                                <a href="#contact" className="hover:text-main-500 hover:underline">Contato</a>
                                <a href="#" className="hover:text-main-500 hover:underline">Agende uma aula</a>
                            </nav>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            {/* Navegação padrão para telas maiores */}
            <nav className="hidden md:flex py-4 flex-row gap-10 pl-14 text-zinc-50 fixed top-0 left-0  z-50  bg-zinc-950">
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
