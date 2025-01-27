import { MapPin, Phone } from 'lucide-react';

function Contact() {
    return (
        <section className="md:mx-40 mx-10 mt-14">
            <h1 className="font-body text-4xl text-zinc-50 font-bold">Onde nos encontrar?</h1>

            <div className="mt-6 text-zinc-50">
                <div className="relative w-fit">
                    <div className='flex items-center absolute md:top-12 top-3 md:left-8 left-4 gap-3'>
                        <MapPin size={48} className='hidden md:block' />
                        <MapPin size={24} className='md:hidden' />
                        <h3 className=" text-white font-bold md:text-3xl text-xl">Endereço:</h3>
                    </div>
                    <div className='absolute left-40 md:text-2xl text-sm flex flex-col items-left top-5 md:gap-1'><p>São joaquim da barra, SP</p><p>Rua das alamedas, 412</p> <p>Bairro Portal das flores</p></div>

                    <img src="address.svg" alt="Endereço" className="block" />
                </div>
                <div className="relative w-fit">
                    <div className='flex items-center absolute top-11 left-8 gap-3'>
                        <Phone size={48} />
                        <h3 className=" text-white font-bold text-3xl">Contato: </h3> <p className='text-2xl ml-2'>+55 (16) 99976-2341</p>
                    </div>
                    <img src="contact.svg" alt="Contato" className="block" />
                </div>
            </div>
        </section>
    );
}

export default Contact;