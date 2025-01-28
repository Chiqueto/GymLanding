function Home() {
    return (
        <section id="home" className="flex flex-row md:ml-20 mt-5 ml-10 md:mr-32 mr-16 pt-14 md:gap-40 gap-6 items-center">
            <p className="font-body md:text-6xl text-xl   sm:text-4xl text-zinc-50 font-bold uppercase text-balance [text-shadow:_2px_4px_8px_rgb(198_67_8_/_75%)] leading-normal">Venha treinar com a gente e seja sua <span className="text-main-700">melhor versão</span></p>
            <img src="/GymLogo.svg" alt="Logo da academia" className="md:max-w-[100%] max-w-[35%]" />
        </section>
    );
}

export default Home;