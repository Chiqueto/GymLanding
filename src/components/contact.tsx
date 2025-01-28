
function Contact() {
    return (
        <section id="contact" className="md:mx-40 mx-10 mt-14  md:mt-20">
            <h1 className="font-body md:text-4xl text-2xl text-zinc-50 font-bold mb-4" >Onde nos encontrar?</h1>

            {/* <div className="mt-6 text-zinc-50">
                <div className="relative w-fit">
                    <div className='flex items-center absolute md:top-12 top-5 md:left-8 left-4 gap-3'>
                        <MapPin size={48} className='hidden md:block' />
                        <MapPin size={24} className='md:hidden' />
                        <h3 className=" text-white font-bold md:text-3xl text-xl">Endereço:</h3>
                    </div>
                    <div className='absolute left-40 md:left-60 md:text-2xl text-xs flex flex-col items-left md:top-5 top-3 md:gap-1'><p>São joaquim da barra, SP</p><p>Rua das alamedas, 412</p> <p>Bairro Portal das flores</p></div>

                    <img src="address.svg" alt="Endereço" className="block " />
                </div> */}
            <img src="adress_full.svg" alt="Endereço" className='' />
            <img src="contact_full.svg" alt="Contato" className='' />
            {/* <div className="relative w-fit">
                <div className='flex items-center absolute md:top-11 top-4 md:left-8 left-4 gap-3'>
                    <Phone size={48} className='hidden md:block' />
                    <Phone size={24} className='md:hidden' />
                    <h3 className=" text-white font-bold md:text-3xl text-xl">Contato: </h3> <p className='md:text-2xl text-lg ml-2'>+55 (16) 99976-2341</p>
                </div>
                <img src="contact.svg" alt="Contato" className="block" />
            </div> */}
        </section >
    );
}

export default Contact;