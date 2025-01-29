import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <footer className='bg-zinc-950 mt-10 py-5'>
            <ul className='flex justify-center gap-4'>
                <li className=''><SocialIcon url="https://x.com" target='_blank' bgColor='#FFFFFF' fgColor='#1B1B1B' style={{ height: 40, width: 40 }} /></li>
                <li><SocialIcon url="https://instagram.com" target='_blank' bgColor='#FFFFFF' fgColor='#1B1B1B' style={{ height: 40, width: 40 }} /></li>
                <li><SocialIcon url="https://facebook.com" target='_blank' bgColor='#FFFFFF' fgColor='#1B1B1B' style={{ height: 40, width: 40 }} /></li>
                <li><SocialIcon url="https://youtube.com" target='_blank' bgColor='#FFFFFF' fgColor='#1B1B1B' style={{ height: 40, width: 40 }} /></li>
                <li><SocialIcon url="https://whatsapp.com" href='https://wa.me/5516999686044?text=Olá! Gostaria de agendar uma aula experimental...' target='_blank' bgColor='#FFFFFF' fgColor='#1B1B1B' style={{ height: 40, width: 40 }} /></li>
                <li><SocialIcon url="https://tiktok.com" target='_blank' bgColor='#FFFFFF' fgColor='#1B1B1B' style={{ height: 40, width: 40 }} /></li>
            </ul>
            <ul className='text-zinc-50 flex justify-center gap-6 mt-4 font-impact italic text-xs text-center mx-2 md:text-base'>
                <li><a href="#home" className="hover:text-main-500 hover:underline">Início</a></li>
                <li><a href="#schedules" className="hover:text-main-500 hover:underline">Horários</a></li>
                <li><a href="#structure" className="hover:text-main-500 hover:underline">Estrutura</a></li>
                <li><a href="#plans" className="hover:text-main-500 hover:underline">Planos</a></li>
                <li><a href="#contact" className="hover:text-main-500 hover:underline">Contato</a></li>
            </ul>

            <p className='text-zinc-400 text-center mt-4 md:text-sm text-xs'>Copyrigth &copy; 2025, Feito por <span className='font-impact italic underline'>Luís Felipe Chiqueto</span> </p>

        </footer>
    );
}

export default Footer;