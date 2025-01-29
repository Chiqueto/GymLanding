

function ScheduleClass() {
    return (
        <section className="text-zinc-50 mx-10 md:mx-40 mt-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Agende uma aula experimental!</h1>
            <p className="text-lg"><a href="https://wa.me/5516999686044?text=Olá! Gostaria de agendar uma aula experimental..." target='_blank' className="text-main-500 underline hover:text-main-600 hover:font-bold">Clique Aqui</a> para entrar em contato e agendar sua aula experimental!</p>
            {/* <div className="bg-zinc-800 border border-secondary-500 rounded-2xl p-3 mt-2 text-sm">
                <form action="" className="flex flex-col gap-4">
                    <div className="grid grid-cols-9 gap-2">
                        <div className="col-span-5 text-sm">
                            <Label htmlFor="name" className=" text-sm">Nome:</Label>
                            <Input type="text" name="name" id="name" placeholder="Seu nome aqui!" className="bg-zinc-900 rounded-xl stroke-secondary-500 focus-visible:ring-secondary-600 focus-visible:border-none border border-secondary-500 text-sm max-h-8 mt-1" />
                        </div>
                        <div className="col-span-4">
                            <Label htmlFor="birth" className="text-sm">Nascimento:</Label>
                            <Input type="date" name="birth" id="birth" className="bg-zinc-900 rounded-xl stroke-secondary-500 focus-visible:ring-secondary-600 focus-visible:border-none border border-secondary-500 max-h-8 text-xs mt-1" />
                        </div>
                    </div>
                    <div className="grid-cols-3">
                        <div className="">
                            <Label htmlFor="scheduledDate" className="text-sm">Data:</Label>
                            <Input type="date" name="scheduledDate" id="scheduledDate" className="bg-zinc-900 rounded-xl stroke-secondary-500 focus-visible:ring-secondary-600 focus-visible:border-none border border-secondary-500 max-h-8 text-xs mt-1" />
                        </div>
                    </div>
                </form>

            </div> */}
        </section>
    );
}

export default ScheduleClass;