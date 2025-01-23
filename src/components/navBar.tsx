function NavBar() {
    return (
        <nav className="my-10 flex flex-row gap-10 ml-14 text-zinc-50">
            <a href="#" className="hover:text-main-500 hover:underline">Início</a><a href="#" className="hover:text-main-500 hover:underline">Estrutura</a><a href="#" className="hover:text-main-500 hover:underline">Horários</a><a href="#" className="hover:text-main-500 hover:underline">Planos</a><a href="#" className="hover:text-main-500 hover:underline">Contato</a><a href="#" className="hover:text-main-500 hover:underline">Agende uma aula</a>
        </nav>
    );
}

export default NavBar;